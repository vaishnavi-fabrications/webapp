import React from 'react';

const ImagePreView = () =>{
    const imgsrc = JSON.parse(sessionStorage.getItem('imgsrc'));
    return(
        <div className="row">
            <div className="col-12">
                <img src={imgsrc} alt="wardrobe" width="auto" height="auto"/>
            </div>
        </div>
    );
};

export default ImagePreView;