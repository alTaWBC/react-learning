import "./App.css";
import React, { useState } from "react";
import Person from "./Person/Person";

const App = () => {
  const [peopleState, setPeopleState] = useState({
    people: [
      { id: "adssdsadas", name: "Max", age: 12 },
      { id: "adssdsaddsd", name: "Manu", age: 26 },
      { id: "adssdsadassda", name: "Steph", age: 223 },
    ],
    otherState: "OtherState", // You can put several variables in an useState
  });

  const [,] = useState({
    otherState: "some other state",
  }); // Use one useState for each variable to Track

  const [showPeopleState, setShowPeopletate] = useState({
    showPeople: false,
  });

  const nameChangedHandler = (event, personId) => {
    setPeopleState({
      people: peopleState.people.map((person) => {
        if (person.id !== personId) return person;
        person.name = event.target.value;
        return person;
      }),
    });
  };

  const deletePersonHandler = (personId) => {
    setPeopleState({
      people: peopleState.people.filter((person) => person.id !== personId),
    });
  };

  const style = {
    backgroundColor: "green",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
    color: "white",
  };

  const togglePeopleHandler = () =>
    setShowPeopletate({ showPeople: !showPeopleState.showPeople });

  let people = null;
  if (showPeopleState.showPeople) {
    people = (
      <div>
        {peopleState.people.map((person) => {
          return (
            <Person
              click={() => deletePersonHandler(person.id)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => nameChangedHandler(event, person.id)}
            />
          );
        })}
      </div>
    );
    style.backgroundColor = "red";
  }

  let classes = [];
  if (peopleState.people.length <= 2) classes.push("red");
  if (peopleState.people.length <= 1) classes.push("bold");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi! I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button style={style} onClick={togglePeopleHandler}>
          Switch Button
        </button>
        {people}
      </header>
    </div>
  );
};

export default App;
