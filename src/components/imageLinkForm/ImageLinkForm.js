import React from 'react';
import './imagelinkform.css'

const ImageLinkForm = () => {
    return(
        <div className="pt5">
            <p className="f3">
                This app will detect faces in your pictures. Give it a try.
            </p>
            <div className="center">
                <div className="center form pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70 center" type='text' /> 
                    <button className="f4 w-30 grow link ph3 pv2 dib white bg-light-purple">Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;