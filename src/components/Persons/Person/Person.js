import React from 'react';
import classs from './Person.css'
// import styled from 'styled-components'
// import Radium from 'radium'

const person = (props) => {
    // const StyledDiv = styled.div`
    //     width: 60%;
    //     margin: 16px auto;
    //     border: 1px solid #eee;
    //     box-shadow: 0 2px 2px #ccc;
    //     padding: 16px;
    //     text-align: center;

    //     @media (min-width: 500px) {
    //         width: 450px
    //     }
    // `
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };
    // const r = Math.random();
    // if( r > 0.5) throw new Error( 'Something error slur' )
    return (
        <div className={classs.Person}>
        {/* <StyledDiv> */}
            <p onClick={props.clicked}>I'am {props.name} and {props.age} years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}></input>
        {/* </StyledDiv> */}
        </div>
    )
};

export default person;
// export default Radium(person);