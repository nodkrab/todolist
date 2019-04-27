import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1> {this.props.title}</h1>
        <button onClick={this.props._addTask}>ADD +</button>
      </header>
    );
  }
}

export default Header;
