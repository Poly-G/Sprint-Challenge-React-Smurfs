import React, { Component } from "react";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newSmurf: {
        name: "",
        age: "",
        height: ""
      }
    };
  }

  addSmurf = e => {
    e.preventDefault();
    this.props.addNewSmurf(this.state.newSmurf);
    // add code to create the smurf using the api

    this.setState({
      newSmurf: {
        name: "",
        age: "",
        height: ""
      }
    });
  };

  handleInputChange = e => {
    this.setState({
      newSmurf: {
        ...this.state.newSmurf,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.newSmurf.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.newSmurf.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.newSmurf.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
