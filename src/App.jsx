
import Card from './Card.jsx'
import Input from './Input.jsx'
import React, {useState} from 'react';

function App() {

const [cards, setCards] = useState([]);
const [inputName, setInputName] = useState('')
const [inputDescription, setInputDescription] = useState('');

const addCard = () => {

if(inputName.trim() && inputDescription.trim()) {
    setCards([...cards, {name: inputName, description: inputDescription}]);
    setInputName('');
    setInputDescription('');
  }
};

const handleNameChange = (event) => {
  setInputName(event.target.value);
}

const handleDescriptionChange = (event) => {
  setInputDescription(event.target.value);
}

return( <>

  <div className= "cards-container">
      <Card />
      {cards.map((card, index) => (
        <Card key={index} name={card.name} description={card.description}/>
      ))}
  </div>
  <Input 
        name= {inputName} 
        description= {inputDescription}
        onNameChange={handleNameChange}
        onDescriptionChange={handleDescriptionChange}
        onAddCard={addCard}/>
  </>
)
}

export default App
