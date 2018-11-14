const request = require('request');

request({
  url: 'http://www.mapquestapi.com/geocoding/v1/address?key=yourKey&location=1301%20lombard%20street%20philadelphia',
  json: true
}, (error, reqponse, body) => {
  console.log(JSON.stringify(body, undefined, 2));
  console.log(body.results[0]);
  console.log(body.results[0].locations[0].latLng.lat);
  console.log(body.results[0].locations[0].latLng.lng);
});
