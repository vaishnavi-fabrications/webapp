import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { ItemRoute }  from '../API/URLS';
import { Avatar, CircularProgress , Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Contents = () =>{
    const route = window.location.pathname.split('/')[1];
    const isMobileView = useSelector(state=>state.MobileView);
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const navigation = useNavigate();
    const FetchData = async () =>{
        setLoading(true);
        await axios.get(`${ItemRoute}/${route}`,{withCredentials:true}).then(resp=>{   
    
            if(resp.data.success){
                setData(resp.data.result);
                setLoading(false);
            }else{
                setLoading(false);
            }
        }).catch(err=>{
            console.log(err.message);
            alert(err.message);
        })
    }
    useEffect(()=>{
        FetchData();
    },[]);
    return(
        <div className='row'>
            <Header/>
            <div className="col-12 main-con">
                {!loading ? 
                    data.map(item=>{
                        return(
                            <Box key={item.img} onClick={()=>{
                                navigation(`/preview`);
                                sessionStorage.setItem('imgsrc',JSON.stringify(item.img));
                            }}><Avatar variant="square" src={item.img} sx={!isMobileView ? {width:"250px",height:"250px"} : {width:"150px",height:"150px"}}/></Box>
                        );
                    }) : <CircularProgress sx={{position:"absolute",top:"50%",left:"50%"}}/>
                }
                {
                    (!loading && data.length===0)&&<Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"10px",width:"100%"}}>
                        <Avatar variant='square' sx={{width:"50px",height:"50px"}} src="https://cdn.shopify.com/s/files/1/1061/1924/products/Sad_Face_Emoji_medium.png?v=1571606037"/>
                        <h3>No Results Found !</h3>
                    </Box>
                }
            </div>
        </div>
    );
};

export default Contents;
