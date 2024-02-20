import bonjour from "bonjour";

const bonjourx = bonjour();
const serviceType = "FAST_SHARE";

bonjourx.find({ type: serviceType }, function (service) {
  console.log("Found an HTTP server:", service);
});
