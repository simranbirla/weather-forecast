import React from "react";

class Option extends React.Component {
  currentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log(pos);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.currentLocation}>Detect</button>
      </div>
    );
  }
}

export default Option;
