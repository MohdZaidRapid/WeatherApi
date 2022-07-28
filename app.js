const request = require("request")
require("dotenv").config()
// console.log(process.env.API_KEY)

const url = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=37.8267,-122.4233`



request({ url: url }, (error, response) => {

    const data = JSON.parse(response.body)
    console.log(data.current)
})
