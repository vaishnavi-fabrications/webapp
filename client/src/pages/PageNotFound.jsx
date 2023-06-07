import React from 'react';
import Header from '../components/Header';
import Logo from '../assets/logo.png';

const PageNotFound = () =>{
    return(
        <div className='row'>
            <Header/>
            <div className="col-12" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img src={Logo} width="30%" height="auto" alt="logo"/>
                <h2 className='pacifico'>PageNotFound :)</h2>
            </div>
        </div>
    );
};

export default PageNotFound;