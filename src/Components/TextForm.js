import React ,{useState} from "react";
export default function TextForm(props) {
    const handleUpClick = ()=>{
        let changeText = text.toUpperCase();
        setText(changeText)
        props.showAlert('Converted into UpperCase','success');
    }
    const handleLoClick = ()=>{
        let changeText = text.toLowerCase();
        setText(changeText)
        props.showAlert('Converted into LowerCase','success');
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const[text,setText] = useState("Enter your text here");
    return (
        <>
            <div className="container"style={{color : props.mode==='dark'?'white':'black'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3" >
                <textarea className="form-control my-4"  value={text} id="myBox" style={{background : props.mode==='light'?'light':'gray'}} onChange={handleOnChange} rows="8"> </textarea>
                <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to UpperCase</button>
            </div>
            <div className="container">
                <h2>Summary</h2>
                <p>Your entered {text.split(" ").length} Words and  {text.length} Charcters</p>
            </div>

            <div className="container">
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
            </div>
        </>
    )
}