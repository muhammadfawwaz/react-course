import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('---getDerivedStateFromProps persons---');
    //     return state;
    // }



    shouldComponentUpdate(nextProps, nextState) {
        console.log('---chouldComponentUpdate persons---');
        // if(nextProps.persons === this.props.persons) return false;
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('---getSnapshotBeforeUpdate persons---');
        return { message: 'Hello brother' };
    }

    componentDidUpdate(prevProps, prrevState, snapshot) {
        console.log('---componentDidUpdate persons---');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('---componentWillUnmount persons---');
    }

    render() {
        console.log('---rendering persons---');
        return this.props.persons.map((person, index) => {
            return <Person 
                key={person.id}
                clicked={() => this.props.clicked( index )}
                name={person.name} 
                age={person.age}
                changed={(event) => this.props.changed( event, person.id )}
            />
        })
    }
}

export default Persons;