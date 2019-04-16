import React, { Component } from "react";

class Weather extends Component {
  render() {
    const {
      tempature,
      city,
      country,
      humidity,
      description,
      icon,
      visibility
    } = this.props;
    return (
      <div className="weather__info">
        <h3 className="title-container__title">weather detail</h3>
        <p className="weather__key">Tempature: {tempature}</p>
        <p className="weather__key">City: {city}</p>
        <p className="weather__key">Country: {country}</p>
        <p className="weather__key">Humidity: {humidity}</p>
        <p className="weather__key">Discription: {description}</p>
        <p className="weather__key">
          Icon:{" "}
          <img
            src={`http://openweathermap.org/img/w/${icon}.png`}
            alt="wthr img"
          />
        </p>
        <p className="weather__key">Visibility: {visibility}</p>
      </div>
    );
  }
}
export default Weather;
