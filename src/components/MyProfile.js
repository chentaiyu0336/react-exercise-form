import React, { Component } from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name: "",
    gender: "Male",
    description: "",
    check: true,
  };
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  handleGenderChange = (event) => {
    this.setState({ gender: event.target.value });
  }
  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  }
  handleCheckChange = (event) => {
    this.setState({ check: event.target.checked });
  }
  handleSubmit = (event) => {
    alert(JSON.stringify(this.state));
    event.preventDefault()
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>MyProfile</h1>

        <div className="name">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Your name" value={this.state.name} onChange={this.handleNameChange} />
        </div>

        <div className="gender">
          <label htmlFor="gender">Gender</label>
          <select value={this.state.gender} onChange={this.handleGenderChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="description">
          <label htmlFor="description">Description</label>
          <input type="text" placeholder="Description about yourself" value={this.state.description} onChange={this.handleDescriptionChange} />
        </div >

        <div className="check">
          <input type="checkbox" checked={this.state.check} onChange={this.handleCheckChange} />
          <label htmlFor="check">I have read the terms of conduct</label>
        </div>

        <input type="submit" value="Submit" className="submit"
          disabled={!this.state.name || !this.state.gender || !this.state.description || !this.state.check} />
      </form>
    );
  }
};

export default MyProfile;


