const request = require("request")
const geoCode = require("./utils/geocode")
const forecast = require("./utils/forecast")
require("dotenv").config()



geoCode("Boston", (error, data) => {
    console.log("Error", error)
    console.log("Data", data)
})






forecast(44.1545, -75.7088, (error, data) => {
    console.log("Error", error)
    console.log("Data", data)
})