import React, { Component } from "react";
import Title from "./Component/Title";
import Form from "./Component/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Component/Weather";
import "./App.css";

const API_KEY = "ebe66ba1687aaab42d3b49812bef1641";

class App extends Component {
  state = {
    tempature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    icon: "",
    visibility: "",
    error: ""
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.City.value;
    const country = e.target.elements.Country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (data.cod === 200) {
      this.setState({
        tempature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        visibility: data.visibility
      });
      return;
    } else {
      this.setState({ error: "Please Enter City and Country name" });
    }
  };

  render() {
    const {
      tempature,
      city,
      country,
      humidity,
      description,
      icon,
      visibility,
      error
    } = this.state;
    return (
      <div className="App">
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-md-5 title-container">
                  <Title />
                </div>
                <div className="col-md-7 form-container">
                  <Form getWeather={this.getWeather} />
                  {country && city ? (
                    <Weather
                      tempature={tempature}
                      city={city}
                      country={country}
                      humidity={humidity}
                      description={description}
                      icon={icon}
                      visibility={visibility}
                    />
                  ) : (
                    error
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
