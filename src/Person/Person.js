import React from "react";
// import React, { Component } from "react"; // Use this if using component
import "./Person.css";

// class Person extends React.Component {}
const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old. {props.children}{" "}
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;

// Equivalent to above
// class Person extends Component {
//   render() {
//     return (
//       <div>
//         <p>
//           I'm {this.props.name} and I'm {this.props.age} years old.{" "}
//           {this.props.children}
//         </p>
//       </div>
//     );
//   }
// }
