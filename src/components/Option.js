import React from "react";
import UserInput from "./UserInput";
import "../Style/Option.css";

class Option extends React.Component {
  state = { lat: "19.07", lon: "72.87", error: "" };
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
  formSubmit = (lat, lon) => {
    this.setState({ lat: lat, lon: lon });
    this.props.onClickLocation(lat, lon);
  };

  render() {
    if (this.state.error) {
      return <div>{this.state.error}</div>;
    }
    return (
      <div className="option" style={{ backgroundColor: "#eef9bf" }}>
        <button onClick={this.currentLocation} className="loc btn">
          Detect <i className="fas fa-map-marker-alt"></i>
        </button>
        <UserInput formSubmit={this.formSubmit} />
      </div>
    );
  }
}

export default Option;
