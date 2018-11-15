const request = require('request');
const myKey = 'your_api_key';

let geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    let encodeAddress = encodeURIComponent(address);
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=${myKey}`,
      json: true
    }, (error, reqponse, body) => {
      if (error) {
        reject('Unable to connect to mapquest servers.');
      } else if (body.status === 'ZERO_RESULTS') {
        reject('Unable to find that address.');
      } else if (body.status === 'OK') {
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    });
  });
};

geocodeAddress('chiyoda tokyo').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});
