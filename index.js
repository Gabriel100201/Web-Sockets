import bonjour from 'bonjour';

const bonjourx = bonjour()

const serviceType = "FAST_SHARE"
// advertise an HTTP server on port 3000
bonjourx.publish({ name: 'My Web Server', type: serviceType, port: 3000 })

// browse for all http services
bonjourx.find({ type: 'FAST_SHARE' }, function (service) {
  console.log('Found an HTTP server:', service)
})