// const request = require('request');
// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode');
// const weather = require('./weather/weather');
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//
// let lati_long = 1;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//     lati_long = results;
//   }
// });
//
// console.log(lati_long);

const request = require('request');

request({
  url: `https://api.darksky.net/forecast/your_forecast_api_key/35.6894875,139.6917064`,
  json: true
}, (error, response, body) => {
  if (error) {
    console.log('Unable to connect to Forecast.io server.');
  } else if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature);
  } else {
    console.log('Unable to fetch weather.');
  }
});
