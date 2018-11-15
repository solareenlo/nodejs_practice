const request = require('request');

const myKey = 'your_api_key';

let geocodeAddress = (address, callback) => {
  let encodeAddress = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=${myKey}`,
    json: true
  }, (error, reqponse, body) => {
    if (error) {
      callcack('Unable to connect to mapquest servers.');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address.');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
};

module.exports.geocodeAddress = geocodeAddress;
