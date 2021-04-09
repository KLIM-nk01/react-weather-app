import React from 'react';
import AppStyle from './App.module.scss'
import Info from "../Info/Info";
import Form from "../Form/Form";
import Weather from "../Weather/Weather";

const API_KEY = 'f4f0260a8382970bcefd071c75d88266';

class App extends React.Component {
    state = {
        temp: undefined,
        city: undefined,
        county: undefined,
        pressure: undefined,
        sunset: undefined,
        error: undefined
    }
    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;

        if(city) {
            const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            const data = await api_url.json();

            let sunset = data.sys.sunset;
            let date = new Date();
            date.setTime(sunset)
            let sunset_date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();


            this.setState(
                {
                    temp: data.main.temp,
                    city: data.name,
                    county: data.sys.country,
                    pressure: data.main.pressure,
                    sunset: sunset_date,
                    error: ''
                }
            )
        }
    }

    render() {
        return (
            <div className={AppStyle.App}>

                <Info/>
                <Form weatherMethod={this.gettingWeather}/>
                <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    county={this.state.county}
                    pressure={this.state.pressure}
                    sunset={this.state.sunset}
                    error={this.state.error}
                />
            </div>
        );
    }
}

export default App;