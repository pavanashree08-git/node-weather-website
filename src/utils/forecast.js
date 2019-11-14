const request = require('request')

const forecast = (latitude, logitude, callback) => {
    const url = 'https://api.darksky.net/forecast/2c367326064101fa0a083ce0d61441ad/' + latitude +',' + logitude

request({ url, json: true }, (error, {body}) => {
    if (error) {
        callback('Unable to connect to the weather service!!', undefined)
    } else if (body.daily.length === 0) {
        callback('Unable to find location', undefined)
    } else {
        callback(undefined, body.daily.data[0].summary + ' It is currently ' + 
        (((body.currently.temperature)-32)*(5/9)) + ' degrees out with lowest and highest temperature of '
        + (((body.daily.data[0].temperatureLow)-32)*(5/9)) + ' and ' + (((body.daily.data[0].temperatureHigh)-32)*(5/9)) + ' respectively. There is ' + 
        body.currently.precipProbability + '% chance of rain.')
    }
})
}

module.exports = forecast
