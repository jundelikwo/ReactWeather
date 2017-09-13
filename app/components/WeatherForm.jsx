import React from 'react'

class WeatherForm extends React.Component{
    constructor(){
        super();
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e){
        e.preventDefault();

        var location = this.refs.location.value;

        if(location.length > 0){
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="search" ref="location" placeholder="Search Weather By City"/>
                    <button className="button hollow expanded">Get Weather</button>
                </form>
            </div>
        )
    }
}

module.exports = WeatherForm;