import React, {useState} from 'react'


export default function TextForm(props) {

    const[text,setText] = useState('');

    const HandeledUpClick = (event)=>{
          setText(text.toUpperCase());
          props.showAlert('Convert to Uppercase', 'Suceess');

    }
    
    const HandeledDownClick = (event)=>{
        setText(text.toLowerCase());
        props.showAlert('Convert to Lowercase', 'Suceess');


  }
  const HandeledClearClick = (event)=>{
    setText("");
    props.showAlert('Clear Text', 'Suceess');


}
    const HandeledOnChange = (event) =>{
        setText(event.target.value);
    }

    
  return (
<>
<div className={`container text-${(props.mode === 'light'?'dark':'light')}`} >
<div className="input-group flex-nowrap">
  <input type="text" className={`form-control text-${props.mode === 'light'?'dark':'light'}`} placeholder="Enter The Text" aria-label="Username" onChange={HandeledOnChange} value={text} aria-describedby="addon-wrapping" style={{backgroundColor : props.mode === 'light'?'white':' rgb(4 39 67)'}}/>
</div>
<div className="container my-2">
<button type="button" className="btn btn-primary mx-1 my-1" onClick={HandeledUpClick}>Convert Uppercase</button>
<button type="button" className="btn btn-primary mx-1 my-1" onClick={HandeledDownClick}>Convert Lowercase</button>
<button type="button" className="btn btn-primary mx-1 my-1" onClick={HandeledClearClick}>Clear</button>
</div>
<h2>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} character</h2>
<h1>{props.heading}</h1>
<p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>

    <h5>{0.008*text.split(' ').length} read time</h5>
  

</div>
       
      

    </>
  )
}
