import React, { Component, Fragment } from 'react';
import classs from './Person.css'
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types';
// import styled from 'styled-components'
// import Radium from 'radium'

class Person extends Component {
    constructor(props) {
        super(props);
        this.refElements = React.createRef(); //modern approach
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.refElements.current.focus();
    }

    render() {
        console.log('---person render...');
        return (
            <Fragment>
                <p>{this.props.auth ? 'Authenticated' : 'Please login'}</p>
                <p 
                    key='i1' 
                    onClick={this.props.clicked}>I'am {this.props.name} and {this.props.age} years old</p>
                <p 
                    key='i2'>{this.props.children}</p>
                <input 
                    key='i3' 
                    type='text' 
                    onChange={this.props.changed} 
                    value={this.props.name}
                    // ref={(inputElement) => {this.inputElement = inputElement}}
                    ref={this.refElements}
                ></input>
            </Fragment>
        );
        
    }
}

Person.propTypes = {
    clicked: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    auth: PropTypes.bool
};

export default withClass(Person, classs.Person);
// export default Radium(person);