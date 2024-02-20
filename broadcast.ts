import bonjour from "bonjour";

const bonjourx = bonjour();

const serviceType = "FAST_SHARE";

bonjourx.publish({
  name: "TEST SERVER FAST SHARE",
  type: serviceType,
  port: 3000,
});
