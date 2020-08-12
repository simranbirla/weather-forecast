import React from "react";

const YOUR_API_KEY = "868bb8a6f60bbc8eaae250c4afef2bf8";
class Option extends React.Component {
  state = { lat: "", lon: "", error: "" };
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

  render() {
    if (this.state.error) {
      return <div>{this.state.error}</div>;
    }
    return (
      <div>
        <button onClick={this.currentLocation}>Detect</button>
      </div>
    );
  }
}

export default Option;
