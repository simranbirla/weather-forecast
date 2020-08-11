import React from "react";

class Option extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Enter the location" />
        <button>Detect</button>
      </div>
    );
  }
}

export default Option;
