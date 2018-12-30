import React, { Component } from 'react'

const person= (props) => {
  return( 
    <div className="Person">
      <h2 onClick={props.click}>I'am {props.name} , I'am {props.age} year old..</h2>
      <p>{props.children}</p>
      <input type="text" onChange={props.nameChange} value = {props.name}></input>
    </div>
    )

}
  

export default person
