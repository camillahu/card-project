
import defaultPic from './assets/Ja.jpg'
import PropTypes from 'prop-types'

function Card(props) {

    return (

        <div className="card">
        <img className= "card-img"src={props.image} alt="Card-picture" />
        <h2 className = "card-title">{props.name}</h2>
        <p className = "card-text">{props.description}</p>
        </div>
    )
}

Card.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string
}

Card.defaultProps = {
    // image: defaultPic,
    name: "Camilla H. Urdal",
    description: "I am 24 years old and a student at Get Academy."
}

export default Card 