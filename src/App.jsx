import Button1 from './Button1.jsx';
import Card from './Card.jsx'
import Input from './Input.jsx'
import React, {useState} from 'react';

function App() {

const [newCards, setCards] = useState(['Card 1',]);

const addCard = () => {
  setCards([...newCards, `Card ${newCards.length +1}`])
}

const [newInput, setInput] = useState();

const addInput = () => {

}

return( <>

  <div className= "cards-container">
      
      {newCards.map((index) => (
        <Card key={index}/>
      ))}

      <Button1 addCard ={addCard}/>  
  </div>
  </>
)
}

export default App
