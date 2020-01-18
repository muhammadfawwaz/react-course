import React, { useEffect } from 'react';
import classs from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('---useEffect cockpit');
        setTimeout(() => {
            alert('SAVED!!!');
        });
        return () => {
            console.log('---cleanup work in useEffect cockpit');
        };
    }, []) //empty array it means that this iseeffect will execute once

    useEffect(() => {
        console.log('---2nd useEffect cockpit');
        return () => {
            console.log('---2nd cleanup work in useEffect cockpit');
        };
    }) //empty array it means that this iseeffect will execute once

    const classes = [];
    let btnClass = '';
    if(props.showPersons) btnClass = classs.Red;

    if(props.personsLength <= 2) classes.push(classs.red);
    if(props.personsLength <= 1) classes.push(classs.bold);

    return (
        <div className={classs.Cockpit}>
            <h1>{props.title}</h1>
            <p className={ classes.join(' ') }>It's conditional</p>
            <button 
                onClick={props.clicked}
                className={btnClass}>Toggle Persons</button>
        </div>
    );
}

export default React.memo(cockpit);