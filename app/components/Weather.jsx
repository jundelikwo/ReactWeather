import React from 'react'
import WeatherMessage from 'WeatherMessage'
import WeatherForm from 'WeatherForm'
import openWeatherMap from 'openWeatherMap'

class Weather extends React.Component{
    constructor(){
        super();
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            isLoading: false
        }
    }

    handleSearch(location){
        this.setState({
            isLoading: true
        })
        openWeatherMap.getTemp(location).then(function(temp){
            this.setState({
                isLoading: false,
                location: location,
                temp: temp
            })
        }.bind(this), function(errorMessage){
            this.setState({
                isLoading: false
            })
            alert(errorMessage);
        }.bind(this));
    }

    render() {
        var {isLoading, location,temp} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h3 className="text-center">Fetching weather...</h3>
            }else if(temp && location){
                return <WeatherMessage location={location} temp={temp}/>
            }
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
}

module.exports = Weather;