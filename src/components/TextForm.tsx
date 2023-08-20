import React, {useState} from 'react'


export default function TextForm(props: {heading: any}) {
  const handleUpClick = ()=>{
    setText(text.toUpperCase());
  }
  const handleLoClick = ()=>{
    setText(text.toLowerCase());
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  let words = text.split(" ").length;
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows={8}></textarea>
        </div>
        <button className="btn btn-primary btn-danger mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{words} Words {text.split("").length} characters</p>
      <p className='my-4'>Reading Time: {words*0.008} <span className="text-danger">minutes</span></p>
    </div>
    </>
  )
}

