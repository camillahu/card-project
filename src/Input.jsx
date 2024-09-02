

function Input(props) {

    return (<>
    <div className="input-card">
        <div className= "input-card-img">
            {props.image ? <img src={props.image} 
            alt="Preview" className="preview-image"/>
            : 'No image selected'} 
        </div>
        <input 
            type= "file" 
            accept="image/*" 
            onChange={props.onImageChange}/>
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
        <button className="save-card-btn"onClick={props.onAddCard}>Save Card</button>
        </>
    )
}

export default Input;
