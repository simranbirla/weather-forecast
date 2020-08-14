import React from "react";
import "../Style/Option.css";
class UserInput extends React.Component {
  state = { lat: "", lon: "" };

  lonChange = (e) => {
    this.setState({ lon: e.target.value });
  };
  latChange = (e) => {
    this.setState({ lat: e.target.value });
  };

  formSubmit = (e) => {
    e.preventDefault();
    if (this.state.lat && this.state.lon) {
      this.props.formSubmit(this.state.lat, this.state.lon);
    }
  };
  render() {
    return (
      <form onSubmit={this.formSubmit} className="location-form">
        <input placeholder="Enter latitude" onChange={this.latChange} />
        <input placeholder="Enter longitude" onChange={this.lonChange} />
        <button type="submit" className="submit">
          Go<i className="fas fa-location-arrow"></i>
        </button>
      </form>
    );
  }
}

export default UserInput;
