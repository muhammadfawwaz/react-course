import React, { Component } from 'react';
import classs from './Person.css'
// import styled from 'styled-components'
// import Radium from 'radium'

class Person extends Component {
    render() {
        console.log('---person render...');
        return (
            <div className={classs.Person}>
            {/* <StyledDiv> */}
                <p onClick={this.props.clicked}>I'am {this.props.name} and {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.changed} value={this.props.name}></input>
            {/* </StyledDiv> */}
            </div>
        )
    }
}

export default Person;
// export default Radium(person);