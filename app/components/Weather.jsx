import React from 'react'
import WeatherMessage from 'WeatherMessage'
import WeatherForm from 'WeatherForm'
import openWeatherMap from 'openWeatherMap'
import ErrorModal from 'ErrorModal'

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
            isLoading: true,
            errorMessage: null
        })
        openWeatherMap.getTemp(location).then(function(temp){
            this.setState({
                isLoading: false,
                location: location,
                temp: temp
            })
        }.bind(this), function(e){
            this.setState({
                isLoading: false,
                errorMessage: e.message
            })
        }.bind(this));
    }

    render() {
        var {isLoading, location,temp, errorMessage} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h3 className="text-center">Fetching weather...</h3>
            }else if(temp && location){
                return <WeatherMessage location={location} temp={temp}/>
            }
        }

        function renderError(){
            if(typeof errorMessage === "string"){
                return <ErrorModal message={errorMessage}/>
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
}

module.exports = Weather;