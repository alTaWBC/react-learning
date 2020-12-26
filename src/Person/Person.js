import React from "react";
// import React, { Component } from "react"; // Use this if using component
// import styled from "styled-components";
import classes from './Person.module.css';

// class Person extends React.Component {}
const Person = (props) => {

  // const StyledDiv = styled.div`
  //   width: 60%;
  //   margin: 16px auto;
  //   border: 1px solid #eee;
  //   box-shadow: 0 2px 3px #ccc;
  //   padding: 16px;
  //   text-align: center;

  //   @media (min-width: 500px) {
  //     width: 450px;
  //   }
  // `; // Uses the package styled-components
  return (
    // <StyledDiv>
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old. {props.children}{" "}
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
    // </StyledDiv>
  );
};

export default Person;

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
