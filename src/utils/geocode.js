const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicGF2YW5hc2hyZWUiLCJhIjoiY2syb2g2aDcxMDR0bjNobzJmZTQyNXVsbiJ9.fYR-suU4s25eaS97eXObNw&limit=1'
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to the location service!!', undefined)
        } else if (body.features.length === 0) {
            return callback('Unable to find location. Try another search', {undefined})
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    }
    )   
}

module.exports = geocode