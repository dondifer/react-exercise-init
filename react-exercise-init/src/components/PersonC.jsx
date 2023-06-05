import React from "react";

class Person extends React.Component {
  render() {
    return (
      <div>
        <p>
          <span>Name: {this.props.name}</span>
        </p>
        <p>
          <span>Surname: {this.props.surname}</span>
        </p>
        <p>
          <span>Age: {this.props.age}</span>
        </p>
      </div>
    );
  }
}

export default Person;
