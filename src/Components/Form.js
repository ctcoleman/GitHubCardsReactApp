import React from "react";
import axios from "axios";

class Form extends React.Component {
  state = { userName: "" };
  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then((result) => {
        return result.data;
      })
      .catch((err) => {
        return;
      });
    if (!response) {
      alert("invalid username");
    } else {
      this.props.onSubmit(response);
      this.setState({ userName: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={(e) => this.setState({ userName: e.target.value })}
          placeholder="GitHub username"
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}

export default Form;
