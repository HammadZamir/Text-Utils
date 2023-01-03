import React , {useState} from 'react'


export default function TextArea(props) {

const OnchangeUP = (event)=>{
    setText(event.target.value)
}



const changetoUP = ()=>{
    let newText = Text.toUpperCase();
    setText(newText)
    props.changeAlert("success : text changed to uppercase")
    
}

const changetoLW = ()=>{
    let newText = Text.toLowerCase();
    setText(newText)
    props.changeAlert("success : text changed to lowercase")
}

const clearText = ()=>{
    let newText = "";
    setText(newText)
    props.changeAlert("success : text cleared")
        
}

const reverseText = ()=>{
    let splitText = Text.split('');
    let reverseText = splitText.reverse();
    let newText = reverseText.join(''); 
    setText(newText);
    props.changeAlert("success : text reversed")
}



const [Text , setText] = useState("");

  return (

<>

    <div className="container mt-4">
        <h2>{props.heading}</h2>
        <div className="mb-3">
           {/* <label for="myBox" className="form-label">Example textarea</label> */}
           <textarea className="form-control" value={Text} onChange={OnchangeUP} id="myBox" rows="10" ></textarea>
        </div>  
        <button className={`btn btn-sm btn-primary mx-1 my-1`} disabled={Text.length===0} onClick={changetoUP} > Change to Uppercase </button>
        <button className="btn btn-sm btn-danger mx-1 my-1" disabled={Text.length===0}  onClick={changetoLW} > Change to Lowercase </button>
        <button className="btn btn-sm btn-success mx-1 my-1" disabled={Text.length===0}  onClick={reverseText} > Reverse Text </button>
        <button className="btn btn-sm btn-success mx-1 my-1" disabled={Text.length===0}  onClick={clearText} > Clear Text </button>
    </div>

    <div className="container my-4">
        <h2>Text Summary</h2>
        <p>{Text.split(" ").filter((element)=>{ return element.length!==0}).length} words and {Text.length} characters</p>

        <h3>Preview</h3>
        <p>{Text}</p>
    </div>

</>
  )
}
 