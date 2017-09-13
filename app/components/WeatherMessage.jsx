import React from 'react'

var WeatherMessage = ({location,temp}) => {
    return(
        <h3 className="text-center">It's it {temp} in {location}</h3>
    )
}

module.exports = WeatherMessage;