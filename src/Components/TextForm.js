import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState("")
    const handelUpClick = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
    } 
    const handelOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleLoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick =()=>{
        let newText = "";
        setText(newText);
    }
    const handleCopy =()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpace =()=>{
        let newText = text.split(/[  ]+/)
        setText(newText.join(" "))
    }
  return (
    <>
    <div className="container">
    <h1 style={{display:'flex', justifyContent:'center' }}>TextUtils</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="8" placeholder='Enter Text Here'></textarea>
            </div>
            
            <button className='btn btn-primary mx-1 my-1' onClick={handelUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container">
        <h2>Your Text Summary</h2>
        <p><b>{text.split(" ").length} Words & {text.length} Character</b></p>
        <p><b>{.008 * text.split(" ").length } Minutes required to read</b></p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
