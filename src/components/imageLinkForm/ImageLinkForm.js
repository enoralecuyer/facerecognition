import React from 'react';
import './imagelinkform.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return(
        <div className="pt5">
            <p className="f3">
                This app will detect faces in your pictures. Give it a try.
            </p>
            <div className="center">
                <div className="center form pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70 center" type='text' onChange={onInputChange}/> 
                    <button 
                        className="f4 w-30 grow link ph3 pv2 dib white bg-pink"
                        onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;