import React from 'react'

export default function About(props) {
    return (
        <div>
            <h1 className='mx-1 my-3'>About us</h1>
            <div className="accordion" id="accordionExample" data-bs-theme={`${props.mode}`}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Text-Utilities</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Text Utilities Description.</strong> It is a Helpful Tool that helps various users to Manipulate their text accoridng to their Choices. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Functionalities</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Use Cases</strong> <br />1.Converts Whole Text to Uppercase<br />2.Converts Whole Text to Lowercase
                            <br />3.Converts First Charchter of each word in the Text to Uppercase <br />4.Remove Extra Spaces In the Text
                            <br/>5.Copy Your Text to the ClipBoard
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Free To Use</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Text Utilities is a Free Charachter Counter Tool.</strong> It Reports the Number of Words and Charachters. Thus it is Suitable for Writing Text.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
