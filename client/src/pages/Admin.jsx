import React, { useState } from 'react';
import Header from '../components/Header';
import '../App.css';
import { Button, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import { auth } from '../database/firebase';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { LoadingButton } from '@mui/lab';
import '../App.css';

const Admin = () =>{
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState({
        Email:"",
        Password:""
    });

    const ChangeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value});
    }

    const SubmitHandler = async () =>{
        setLoading(true);
        await signInWithEmailAndPassword(auth,data.Email,data.Password).then(resp=>{
            console.log(resp);
            setLoading(false);
        }).catch(err=>{
            alert(err.message);
            setLoading(false);
        })
    };

    const Signup = async () =>{
        setLoading(true);
        await createUserWithEmailAndPassword(auth,data.Email,data.Password).then(resp=>{
            setLoading(false);
        }).catch(err=>{
            alert(err.message);
            setLoading(false);
        })
    };

    return(
        <div className='row'>
            <Header/>
            <div className="col-12">
                <div className="container">
                    <h6 className='mt-4 text-center' onDoubleClick={Signup}>Admin Login</h6>
                    <Stack direction="column" sx={{width:"100%",marginTop:"20px"}}>
                        <TextField label="Enter Email" sx={styles.TextField} name="Email" value={data.Email} onChange={ChangeHandler}/>
                        <TextField label="Enter Password" sx={styles.TextField} type="password" name="Password" value={data.Password} onChange={ChangeHandler}/>
                        <LoadingButton sx={{backgroundColor:"#332885",width:"90%",margin:"auto",color:"white"}}onClick={SubmitHandler} loading={loading} className="login">Login</LoadingButton>
                    </Stack>
                </div>
            </div>
        </div>
    );
};

const styles = {
    TextField:{
        width:"90%",
        margin:"auto",
        marginBottom:"5px"
    }
}

export default Admin;
