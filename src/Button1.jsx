import React, {useState} from 'react'

function Button1({addCard}) {

    const click = () => {
        addCard();
    }

    return (<button onClick={click}>Make your own card!</button>)
}

export default Button1;