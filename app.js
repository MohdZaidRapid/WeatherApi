const request = require("request")
const geoCode = require("./utils/geocode")
require("dotenv").config()
// console.log(process.env.API_KEY)

// const url = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=37.8267,-122.4233&units=f`



// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log("Unable  to connect or weather service")
//     } else if (response.body.error) {
//         console.log("Unable to find location")
//     }
//     else {
//         console.log(`${response.body.current.weather_descriptions[0]}  it is currently ${response.body.current.temperature} degrees out .There feels like ${response.body.current.feelslike} degree`)
//     }

// })


// Geocoding
// Address -> Lat/Long ->Weather
// https://api.mapbox.com/geocoding/v5/{endpoint}/{search_text}.json


// const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=${process.env.GEO_ACCESS_TOKEN}&limit=1`

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log("Unable to connect to location services")
//     } else if (response.body.features.length === 0) {
//         console.log("Unable to find location.Try another search")
//     } else {

//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }
// })




geoCode("Boston", (error, data) => {
    console.log("Error", error)
    console.log("Data", data)
})