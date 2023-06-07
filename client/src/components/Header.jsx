import React, { useState } from 'react';
import { AppBar,Avatar,Toolbar,  IconButton } from '@mui/material';
import Logo from '../assets/logo.png';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingButton } from '@mui/lab';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../database/firebase';
import { Actions } from '../redux/Store';
const Header = () =>{
    const Auth = useSelector(state=>state.AdminLogged);
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    const dispatch = useDispatch();
    return(
        <AppBar position='static' sx={{backgroundColor:"white",color:"black",boxShadow:"-3px -8px 15px gray"}}>
            <Toolbar>
                <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%"}}>
                    <div style={{display:"flex",alignItems:"center"}}>
                        <IconButton onDoubleClick={()=>{
                            navigate('/admin');
                        }}>
                            <Avatar src={Logo}/>
                        </IconButton>
                        <h6 className='pacifico' style={{textAlign:"center",marginTop:"10px"}}>Vaishnavi Fabrications</h6>
                    </div>
                    {Auth && <LoadingButton onClick={()=>{
                    setLoading(true);
                    signOut(auth).then(()=>{
                        setTimeout(()=>{
                            dispatch(Actions.setAdminLogged(false));
                            navigate('/');
                            setLoading(false);
                        },5000);
                        // navigate('/');
                    }).catch(err=>{
                        alert(err.message);
                    })
                    }} loading={loading}>Signout</LoadingButton>}
                </div>
            </Toolbar>
        </AppBar>
    );
};  

export default Header;