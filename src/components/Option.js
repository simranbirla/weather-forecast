import React from "react";
import UserInput from "./UserInput";

class Option extends React.Component {
  state = { lat: " 40.12", lon: "-96.66", error: "" };
  currentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.setState({ lat: pos.coords.latitude, lon: pos.coords.longitude });
        this.props.onClickLocation(pos.coords.latitude, pos.coords.longitude);
      },
      (err) => {
        this.setState({ error: err.message });
      }
    );
  };
  formSubmit(lat, lon) {
    console.log(lat, lon);
    this.setState({ lat: lat, lon: lon });
  }

  render() {
    if (this.state.error) {
      return <div>{this.state.error}</div>;
    }
    return (
      <div>
        <button onClick={this.currentLocation}>Detect</button>
        <UserInput formSubmit={this.formSubmit} />
      </div>
    );
  }
}

export default Option;
