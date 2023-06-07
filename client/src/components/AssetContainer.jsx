import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';
import { deleteObject,ref  } from 'firebase/storage';
import React from 'react';
import { ItemRoute } from '../API/URLS';
import { storage } from '../database/firebase';

const AssetContainer = (props) =>{
    const { content , image, FetchAssets } = props;
    // console.log(content);
    const DeleteAsset = async () =>{
        const Ref = ref(storage,image);
        await deleteObject(Ref).then(resp=>{
            // console.log(resp);
            axios.delete(`${ItemRoute}/${content._id}`).then(resp=>{
                // console.group(resp);
                if(resp.data.success){
                    alert('deleted !')
                    FetchAssets()
                }
            });
        })
    };
    return(
        <Card sx={{width:"270px",height:"250px",margin:2}}>
            <CardMedia image={image} sx={{height:"140px"}}/>
            <CardContent>
                <Typography>Category : {content.category}</Typography>
            </CardContent>
            <CardActions>
                <Button color="warning" onClick={DeleteAsset}>Delete</Button>
            </CardActions>
        </Card>
    );
};

export default AssetContainer;