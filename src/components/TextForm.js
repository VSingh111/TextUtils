import React, {useState} from 'react'

export default function TextForm(props) {
    const handleOnChange = (event)=>{
        console.log("on Change");
        setText(event.target.value);
    }

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success")
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleclearClick = ()=>{
      let newText = '';
      setText(newText);
      props.showAlert("Text cleared!", "success");
  }

  const handlecopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
}

  const handleExtraSpaces = ()=>{
    let newText =text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed!", "success");
  }



    const [text, setText] = useState('')
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
   color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-1' onClick={handleclearClick}>Clear Text</button>
<button className='btn btn-primary mx-1' onClick={handlecopy}>Copy Text</button>
<button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra spaces</button>
    </div>
    <div className="container my-2" style={{color:props.mode ==='dark'?'white':'#042743'}}>
     <h3>Your Text Summary</h3>
     <p>{text.split(" ").length} words and {text.length} characters</p>
     <p>{0.008 * text.split(" ").length} Minutes read</p>
     <h5>Preview</h5>
     <p>{text.length > 0 ? text : 'Enter something in textbox to preview it here.'}</p>
    </div>
    </>
  )
}
