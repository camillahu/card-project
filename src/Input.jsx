import React, {useState} from 'react';
import Button1 from './Button1.jsx';

function Input(props) {

    

    // const picture = props.picture;
    // const name = props.name;
    // const description = props.description;

    return (<>
    <div className="input-card">
        <div className= "input-card-img"></div>
        <input 
            className = "input-card-name"  
            type="text" placeholder='Name' 
            value={props.name} onChange={props.onNameChange}/>
        
        <textarea 
            className = "input-card-text" 
            type="text" placeholder='Description' 
            maxLength={75} value={props.description} 
            onChange={props.onDescriptionChange}></textarea>
        </div>
        <button onClick={props.onAddCard}></button>
        </>
    )
}

export default Input;
