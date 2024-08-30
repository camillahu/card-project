import profilePic from './assets/IMG_1707.JPEG'
import Card from './Card.jsx'
import Input from './Input.jsx'
import React, {useState} from 'react';

function App() {

const [cards, setCards] = useState([]);
const [inputName, setInputName] = useState('') //String som midlertidig lagrer input-verdien til name.
const [inputDescription, setInputDescription] = useState(''); //String som midlertidig lagrer input-verdien til description.
const [inputImage, setInputImage] = useState(null)

const addCard = () => {
  console.log("Current state before adding card:", {
    name: inputName,
    description: inputDescription,
    image: inputImage,
  });
if(inputName.trim() && inputDescription.trim()&& inputImage) {  
//denne sjekker at det er verdier i begge variablene etter den har tatt vekk whitespace.
//dette gjør det umulig for brukeren å lage et kort uten å fylle inn, eller lage et kort som består av whitespace.
    
    setCards([...cards, {name: inputName, description: inputDescription}]);
    //setCards lager først en shallow-kopi av cards-arrayet, og legger til det nye kortet fra input-feltene
    setInputName('');
    setInputDescription('');
    setInputImage(null)
    //disse tre setter input-feltene til blank/null igjen.
  }
  else {
    console.log("Name, description, or image is missing"); 
  }
};

const handleNameChange = (event) => {
  setInputName(event.target.value);
}

const handleDescriptionChange = (event) => {
  setInputDescription(event.target.value);
}

const handleImageChange = (event) => {
  const file = event.target.files[0];

  if(file) {
    const reader = new FileReader();
    reader.onload = () => {
      console.log("Image loaded:", reader.result);
      setInputImage(reader.result)
    }
  reader.readAsDataURL(file)
  };
  
}

//disse brukes på en onchange ^. valuen til setInputDescriptionblir sendt som parameter, og blir satt øverst i koden med useState.

return( <>

  <div className= "cards-container">
      <Card image= {profilePic}/>
      {cards.map((card, index) => (
        <Card key={index} name={card.name} description={card.description} image={card.image}/>
      ))}
      {/* Denne mapper ut cards-arrayen og legger infoen i riktig sted.*/}

  </div>
  <Input 
        name= {inputName} 
        description= {inputDescription}
        onNameChange={handleNameChange}
        onDescriptionChange={handleDescriptionChange}
        onImageChange={handleImageChange}
        onAddCard={addCard}/>
  </>
)
}

export default App
