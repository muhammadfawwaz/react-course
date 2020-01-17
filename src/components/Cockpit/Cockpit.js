import React from 'react';
import classs from '/Cockpit.css';

const cockpit = (props) => {
    const classes = [];
    let btnClass = '';
    if(props.showPersons) btnClass = classs.Red;

    if(props.persons.length <= 2) classes.push(classs.red);
    if(props.persons.length <= 1) classes.push(classs.bold);

    return (
        <div className={classs.Cockpit}>
            <h1>Hi I'm React App Dev</h1>
            <p className={ classes.join(' ') }>It's conditional</p>
            <button 
                onClick={this.showPersonsHandler}
                className={btnClass}>Toggle Persons</button>
            <p>It's work</p>
        </div>
    );
}

export default cockpit