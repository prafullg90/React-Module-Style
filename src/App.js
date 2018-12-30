import React, { Component } from 'react';
import Person from "./Person/Person";
import newClasses from './App.module.css';
import './Person/Person.css';

class App extends Component {

  state = {
    persons : [
      {id : 'perone', name : 'Prafull Gaikwad', age: 28},
      {id : 'pertwo', name : "Manisha Shelke", age : 27},
      {id : 'perthree', name: 'Namrata Palkar', age : 25}
    ],
    showPerson : false,
    buttonState : 'Show'
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event, id) => {


    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    console.log(personIndex);
    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );

  }

  togglePersonHandler = () =>{
    const doesShow = this.state.showPerson;
    let newButtonState = 'Show';
    doesShow ? newButtonState = 'Show' : newButtonState = 'Hide';
    this.setState({showPerson : !doesShow,
                  buttonState : newButtonState});

  }

  render() {

   

    let persons = null;
    let btnClass = '';
    if(this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map((persons, index) => {
              return (<Person 
                click={() => this.deletePersonHandler(index)}
                name={persons.name} 
                age={persons.age} 
                nameChange ={(event) => this.nameChangeHandler(event, persons.id)}
                key={persons.id}
                />)
          })}
        </div>
      )
      btnClass = newClasses.red;
     
    }

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push(newClasses.red);
    }

    if(this.state.persons.length <= 1){
      classes.push(newClasses.bold);
    }

    return (
      <div className={newClasses.App}>
       <h1>Hallo, I`am React App</h1>
       <p className={classes.join(' ')}> This is really working!!</p>
       <button className={btnClass}
       onClick={() => this.togglePersonHandler()}>{this.state.buttonState} Person</button>
        {persons}
      </div>
    );
  }
}

export default App;