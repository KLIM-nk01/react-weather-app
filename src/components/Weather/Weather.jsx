import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div>
                {this.props.city &&
                <div>
                    <p>Location: {this.props.city}, {this.props.county}</p>
                    <p>Temp: {this.props.temp}</p>
                    <p>Pressure: {this.props.pressure}</p>
                    <p>Sunset: {this.props.sunset}</p>
                </div>
                }

            </div>
        );
    }
}

export default Weather;