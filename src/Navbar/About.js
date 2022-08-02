import React from 'react'
import { useState } from 'react';



export default function About() {
  const [col,setCol] = useState({

    color:'Black',
    backgroundColor:'White'
  })
const[btn,setBtn]=useState('Enable Dark Mode')
  const toggelStyle = () =>{
    if (col.color === 'Black') {  
      setCol({
        color:'White',
        backgroundColor:'Black',
        border:'1px solid white'
      })
      setBtn('Enable Light Mode')

    }
    else{
      setCol({
        color:'Black',
        backgroundColor:'White'
      })
      setBtn('Enable Dark Mode')


    }
  }

  return (
    <div className="container" style={col}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={col} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Analyze Your Text
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={col}>
              <strong>You can easily Analyze your text.</strong> and count word, character count.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={col} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Easy to Use
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={col}>
              Word Cal is a free character counter tool that provide instant character count & word count for a given text easily.  
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={col} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              About Word Cal
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={col}>
              Word Cal software is work in any web browser such as Chorme, Firefox, Internet Explore, Opera.
            </div>
          </div>
        </div>
      </div>
      <div className="comtainer my-3">
        <button type="button" className="btn btn-primary" onClick={toggelStyle}>{btn}</button>

      </div>
    </div>

  )
}
