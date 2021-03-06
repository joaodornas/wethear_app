
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const city = process.argv[2]

if (city) {

    geocode(city, (error,data) => {
    
        if (error) {
            return console.log(error)
        }
   
        forecast(data.latitude, data.longitude, (error, forecastData) => {
        
            if (error) {
                return console.log(error)
            }
        
            console.log(data.location)
            console.log(forecastData)

        })

    })

}
