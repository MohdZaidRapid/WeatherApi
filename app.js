const request = require("request")
require("dotenv").config()
// console.log(process.env.API_KEY)

const url = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=37.8267,-122.4233&units=f`



request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.current)
    console.log(`${response.body.current.weather_descriptions[0]}  it is currently ${response.body.current.temperature} degrees out .There feels like ${response.body.current.feelslike} degree`)
})


