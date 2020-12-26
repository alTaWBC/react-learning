import styles from "./App.module.css";
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

  const togglePeopleHandler = () =>
    setShowPeopletate({ showPeople: !showPeopleState.showPeople });

  let people = null;
  let buttonClass = [styles.button];
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
    buttonClass.push(styles.Red);
  }

  let classes = [];
  if (peopleState.people.length <= 2) classes.push(styles.red);
  if (peopleState.people.length <= 1) classes.push(styles.bold);

  return (
    <div className="App">
      <h1>Hi! I'm a React App</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <button className={buttonClass.join(" ")} onClick={togglePeopleHandler}>
        Toggle Text
      </button>
      {people}
    </div>
  );
};

export default App;
