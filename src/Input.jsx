import React, {useState} from 'react';
import Card from './Card.jsx'

function Input() {

//     const [name, setName] = useState("");

//     function handleNameChange(event) {
//         setName(event.target.value);
//     }

//     return(<div>
//         <h3>Make your own card!</h3>
//         <p>Name: {name}</p>
//         <input value = {name} onChange = {handleNameChange}/>
        
//         </div>)
// 
    const picture = props.picture;
    const name = props.name;
    const description = props.description;
    return (

        <div className="card">
        <img className= "card-img"src={picture}/>
        <h2 className = "card-title">{name}</h2>
        <p className = "card-text">{props.description}</p>
        </div>
    )
}

export default Input 
