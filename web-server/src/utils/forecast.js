const request = require('request')

const forecast = (lat,long,callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=3a1c106e33bcf57a68b340064f5f4ba6&query=' + lat + ',' + long

    request({url:url,json:true},(error, response) => {
        if (error) {
            callback('Unable to connect to services.',undefined)
        } else if (response.body.error) {
            callback('Unable to find location.', undefined)
        }
        else
        {
            callback(undefined, {
                summary: response.body.current.weather_descriptions[0],
                temperature: response.body.current.temperature,
                location: response.body.location.name,
            })
        }
    })

}

module.exports = forecast