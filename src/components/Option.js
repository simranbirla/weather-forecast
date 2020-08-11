import React from "react";

class Option extends React.Component {
  state = { lat: "", lon: "", error: "" };
  currentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log(pos.coords.latitude);
        console.log(pos.coords.longitude);
      },
      (err) => {
        console.log(err.message);
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
