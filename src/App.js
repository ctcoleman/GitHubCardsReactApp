import React from "react";
import CardList from "./Components/CardList";
import Form from "./Components/Form";

import "./styles.css";

class App extends React.Component {
  // current current syntax:
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: dummyData,
  //   };
  // }
  // upcoming JS syntax:
  state = {
    profiles: []
  };

  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };

  render() {
    return (
      <>
        <h1 className="header">{this.props.title}</h1>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </>
    );
  }
}

export default App;
