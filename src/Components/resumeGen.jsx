import React from "react";
export class ResumeData extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>{this.props.details.fname} </h1>
        <h1>{this.props.details.lname} </h1>
        <h1>{this.props.details.age} </h1>
        <h1>{this.props.details.gender} </h1>
      </div>
    );
  }
}
