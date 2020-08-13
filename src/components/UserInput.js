import React from "react";

class UserInput extends React.Component {
  state = { lat: "", lon: "" };

  lonChange = (e) => {
    this.setState({ lon: e.target.value });
  };
  latChange = (e) => {
    this.setState({ lat: e.target.value });
  };

  formSubmit = () => {
    if (this.state.lat && this.state.lon) {
      this.props.formSubmit(this.state.lat, this.state.lon);
    }
  };
  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <input placeholder="Enter latitude" onChange={this.latChange} />
        <input placeholder="Enter longitude" onChange={this.lonChange} />
        <button type="submit" className="submit btn">
          Use location
        </button>
      </form>
    );
  }
}

export default UserInput;
