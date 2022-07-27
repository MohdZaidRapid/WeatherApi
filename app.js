const request = require("request")

const url = `http://api.weatherstack.com/current?access_key=${PROCESS_API_KEY}`

request({ url: url }, (err, response) => {

    const data = JSON.parse(response.body)
    console.log(data) 
})
