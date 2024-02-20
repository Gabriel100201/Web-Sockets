import WebSocket from "ws";
import bonjour from "bonjour";
import { IncomingMessage } from "http";

const comChannel = bonjour();

let server: WebSocket.Server | null = null;
let port = 56565;

function startWebSocketServer(port: number) {
  server = new WebSocket.Server({ port });

  server.on("connection", (socket: WebSocket, req: IncomingMessage) => {
    socket.on("message", async (message: WebSocket.Data) => {
      console.log("Enviando mensaje a: ", req.socket.remoteAddress);
      socket.send("MENSAJE DE PRUEBA");
    });
  });

  server.on("error", (error: any) => {
    if (error.code === "EADDRINUSE") {
      console.log(
        `El puerto ${port} está ocupado. Intentando con el siguiente puerto.`
      );
      startWebSocketServer(port + 1);
    } else {
      console.error("Error en el servidor WebSocket:", error.message);
    }
  });
}

startWebSocketServer(port);
