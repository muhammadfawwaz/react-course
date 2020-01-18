import React, { Component } from 'react';
import classs from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('---constructor---');
    //u can set state with this.state.persons = 
  }

  state = {
    persons: [
      { id: 'dw32', name: 'Afif', age: 22 },
      { id: 'sq2w', name: 'Dzulfi', age: 23 },
      { id: 'qw2e', name: 'Zaki', age: 23 }
    ],
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('---getDerivedStateFromProps---', props, state);
    return state;
  }

  // UNSAFE_componentWillMount() {
  //   console.log('---componentWillMount---');
  // }

  componentDidMount() {
    console.log('---componentDidMount---');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('---shouldComponentUpdate---');
    return true;
  }

  componentDidUpdate() {
    console.log('---componentDidUpdate---');
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
    console.log('---render---');
    let persons = null;
    if(this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }

    return (
      // <StyleRoot>
        <div className={classs.App}>
            <button onClick={() => this.setState({ showCockpit: false })}>Remove Cockpit</button>
            {
              this.state.showCockpit ? <Cockpit
              title={this.props.title}
              personsLength={this.state.persons.length} 
              showPersons={this.state.showPersons}
              clicked={this.showPersonsHandler}/> : null
            }
            {persons}
        </div>
      // {/* </StyleRoot> */}
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'am React App Dev'))
  }
}

// export default Radium(App);
export default App;
