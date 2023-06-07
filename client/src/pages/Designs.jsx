import { IconButton, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';
import Header from '../components/Header';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import CountertopsIcon from '@mui/icons-material/Countertops';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import TvIcon from '@mui/icons-material/Tv';
import { useNavigate } from 'react-router-dom';

const Designs = () =>{
    const navigate = useNavigate();
    return(
        <div className='row'>
            <Header/>
            <div className="col-12">
            <List sx={{width:"100%",cursor:"pointer"}}>
                        <ListItem onClick={()=>{
                                    navigate('/kitchen')
                                }}>
                            <ListItemAvatar>
                                <IconButton>
                                    <CountertopsIcon sx={{color:"#332885"}}/>
                                </IconButton>
                            </ListItemAvatar>
                            <ListItemText primary="Modular Kitchen"/>
                        </ListItem>
                        <ListItem onClick={()=>{
                                    navigate('/bedroom')
                                }}>
                            <ListItemAvatar>
                                <IconButton>
                                    <AirlineSeatIndividualSuiteIcon sx={{color:"#332885"}}/>
                                </IconButton>
                            </ListItemAvatar>
                            <ListItemText primary="Bedroom wardrobes"/>
                        </ListItem>
                        <ListItem onClick={()=>{
                                    navigate('/tv')
                                }}>
                            <ListItemAvatar>
                                <IconButton>
                                    <TvIcon sx={{color:"#332885"}}/>
                                </IconButton>
                            </ListItemAvatar>
                            <ListItemText primary="Tv unit"/>
                        </ListItem>
                        <ListItem onClick={()=>{
                                    navigate('/wall')
                                }}>
                            <ListItemAvatar>
                                <IconButton>
                                    <DinnerDiningIcon sx={{color:"#332885"}}/>
                                </IconButton>
                            </ListItemAvatar>
                            <ListItemText primary="Wall partitions"/>
                        </ListItem>
                        <ListItem onClick={()=>{
                                    navigate('/crockery')
                                }}>
                            <ListItemAvatar>
                                <IconButton>
                                    <MeetingRoomIcon sx={{color:"#332885"}}/>
                                </IconButton>
                            </ListItemAvatar>
                            <ListItemText primary="Crockey Units"/>
                        </ListItem>
                    </List> 
            </div>
        </div>
    );
};

export default Designs;