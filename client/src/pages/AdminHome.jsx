import React, { useState } from 'react';
import Header from '../components/Header';
import { Avatar,FormControl, MenuItem, Select, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { ref,uploadBytes,getDownloadURL } from 'firebase/storage';
import { storage } from '../database/firebase';
import { v4 } from 'uuid';
import { ItemRoute } from '../API/URLS';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminHome = () =>{
    const [file,setFile] = useState('');
    const [base64,setBase64] = useState('');
    const [option,setOption] = useState('select');
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    const ReadBase = img =>{
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = () =>{
            setBase64(reader.result);
        }
    };
    const SubmitHandler = async () =>{
        const StrorageRef = ref(storage,`${option}/${file.name+v4()}`);
        if(option==='select'){
            alert('please select an option !');
        }else{
            setLoading(true);
            await uploadBytes(StrorageRef,file).then(async resp=>{
                setLoading(false);
                await getDownloadURL(resp.ref).then(url=>{
                    axios.post(`${ItemRoute}`,{
                        img:url,
                        category:option
                    }).then(resp=>{
                        if(resp.data.success){
                            alert(resp.data.message);
                        }else{
                            alert(resp.data.message);
                        }
                    }).catch(err=>{
                        console.log(err.message);
                    })
                })
                
            }).catch(()=>{
                alert("failed to upload ..")
            })
        }
    }
    return(
        <div className='row'>
            <Header/>
            <div className="col-12">
                <div style={{display:"flex",justifyContent:'center',flexDirection:"column",gap:"20px",alignItems:"center"}}>
                    <Avatar src={base64 ? base64 : ''} sx={{width:"350px",height:"350px",marginTop:"10px"}} variant="square"/>
                    <input type="file" onChange={(e)=>{
                        setFile(e.target.files[0]);
                        ReadBase(e.target.files[0]);
                    }}accept=".png, .jpg"/>
                    <FormControl fullWidth sx={{display:"flex",justifyContent:"center",flexDirection:"row"}}>
                        <Select value={option} onChange={(e)=>{
                            setOption(e.target.value);
                        }} sx={{width:"350px"}}>
                            <MenuItem value="select">Select</MenuItem>
                            <MenuItem value="ricemill">Rice Mill Sheds</MenuItem>
                            <MenuItem value="functionhall">Function Hall Sheds</MenuItem>
                            <MenuItem value="container">Container Houses</MenuItem>
                            <MenuItem value="msconstruction">MS Construction Buildings</MenuItem>
                        </Select>
                    </FormControl>
                    <LoadingButton sx={{backgroundColor:"#332885",color:"white",width:"350px"}} onClick={SubmitHandler} loading={loading}>Upload</LoadingButton>
                    <Button onClick={()=>{
                        navigate('/adminproducts');
                    }}>View Assets</Button>
                </div>
            </div>
        </div> 
    );
};

export default AdminHome;