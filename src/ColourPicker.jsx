import React, {useState} from "react"

function ColourPicker()
{
    let [colour, setColour] = useState("#FFFFFF");

    function changeColour(event) {
        setColour(event.target.value);
    }

    return(
        <div className="app-container">
            <h2>Colour Picker</h2>
            <div className="colour-display" style={{backgroundColor: colour}}>
                <label className="color-label">{colour}</label>
            </div>
            <div id="inputContainer">
                <label>Pick Colour: </label>
                <input type="color" value={colour} onChange={changeColour}></input>
            </div>
        </div>
    )
}

export default ColourPicker