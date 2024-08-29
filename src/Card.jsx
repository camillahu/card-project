import profilePic from './assets/IMG_1707.JPEG'
import PropTypes from 'prop-types'

function Card(props) {

    // const picture = props.picture;
    // const name = props.name;
    // const description = props.description;
    return (

        <div className="card">
        <img className= "card-img"src={props.picture}/>
        <h2 className = "card-title">{props.name}</h2>
        <p className = "card-text">{props.description}</p>
        </div>
    )
}

Card.propTypes = {
    // picture: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string
}

Card.defaultProps = {
    picture: profilePic,
    name: "Camilla H. Urdal",
    description: "I am 24 years old and a student at Get Academy."
}

export default Card 