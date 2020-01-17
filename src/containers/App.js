import React, { Component } from 'react';
import classs from './App.css';
import Persons from '../components/Persons/Persons';
// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

// import styled from 'styled-components';
// import Radium, { StyleRoot } from 'radium'

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
//   &:hover {
//      background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//      color: black;
//   }
// `;

class App extends Component {
  state = {
    persons: [
      { id: 'dw32', name: 'Afif', age: 22 },
      { id: 'sq2w', name: 'Dzulfi', age: 23 },
      { id: 'qw2e', name: 'Zaki', age: 23 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    this.setState({
      persons: [
        { id: 'dw32', name: newName, age: 22 },
        { id: 'sq2w', name: 'Dzulfi Ridha', age: 23 },
        { id: 'qw2e', name: 'Zaki Muttaqi', age: 23 }
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIdx = this.state.persons.findIndex(person => person.id === id);
    const person = {
      ...this.state.persons[personIdx]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIdx] = person;
    this.setState({
      persons: persons
    });
  }

  showPersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (idx) => {
    const persons = [...this.state.persons];
    persons.splice(idx, 1);
    this.setState({
      persons: persons
    })
  }

  render() {

    let btnClass = '';

    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   // ':hover': {
    //   //   backgroundColor: 'lightgreen',
    //   //   color: 'black'
    //   // }
    // }

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      )
    }

    return (
      // <StyleRoot>
        <div className={classs.App}>
            {persons}
        </div>
      // {/* </StyleRoot> */}
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'am React App Dev'))
  }
}

// export default Radium(App);
export default App;
