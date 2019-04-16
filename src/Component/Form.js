import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div>
        <h3 className="title-container__title">Enter your location</h3>
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="City" placeholder="City name....." />
          <input type="text" name="Country" placeholder="Country name...." />
          <button>get weather</button>
        </form>
      </div>
    );
  }
}
export default Form;
