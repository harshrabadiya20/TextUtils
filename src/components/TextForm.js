import React, {useState } from 'react'

export default function TextForm(props) {
    const [text,setText] = useState(""); 
    
    const handleUpClick = ()=>{ 
        console.log("uppercase was clicked");
        const newText = text.toUpperCase();
        props.showAlert("converted to uppercase","sucess");
        setText(newText);
        
    }
    const handleOnChange = (event)=>{
        console.log("handle on change");
        setText(event.target.value);
    }
    const handleLoClick =()=>{
        const newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("converted to lowercase","sucess");
    }
    const handleClear =()=>{
        const newtext = ''
        setText(newtext);
    }

    const handleCopy = ()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ] + /);
        setText(newText.join(' '));
    }
  return (
    <>
       <div className='container mb-3' style={{color: props.mode==='light'? 'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className='form-control'  value={text} style={{backgroundColor: props.mode==='dark'? 'grey':'white',color :props.mode==='light'? 'black':'white'}} onChange={handleOnChange} id='myBox' rows={8}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>convert to uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>convert to lowercase</button>
            <button className="btn btn-primary mx-3" onClick={handleClear}>clear Text</button>
            <button className="btn btn-primary mx-3" onClick={handleCopy}>copy text</button>
            <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>remove extra spaces</button>
       </div>
       <div className="container my-3" style={{color: props.mode==='light'? 'black':'white'}}>
        <h2>your summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>preview</h2>
        <p>{text.length>0 ? text : 'please write here something to preview'}</p>
       </div>
    </>   
  )
}
