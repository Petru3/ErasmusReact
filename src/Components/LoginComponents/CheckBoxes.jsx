

function CheckBoxes(prop) {
    return (
        <div className="inline-text-group">
           <input type="radio" name="profil"/>
           <h3>{prop.text}</h3>
        </div>
    )
}

export default CheckBoxes