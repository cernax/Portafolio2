import TripOriginIcon from '@mui/icons-material/TripOrigin';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function Education() {

    return (
        <>
            <Typography sx={{ display: 'flex', width:'50%' }} component="span" variant="h4" color="text.primary">                    
                Education
            </Typography>
            <br/>

            <div style={{ width:'100%', display:'flex'}} >
                <div style={{ width:'50%' }} >       
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <TripOriginIcon sx={{ color:'#20c997' }} />
                        </ListItemAvatar>
                        <ListItemText
                        primary="CFT Simon Bolivar"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Systems Analysis Technician
                            </Typography>
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <TripOriginIcon sx={{ color:'#20c997' }} />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Microsoft"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Microsoft Power Platform Functional Consultant
                            </Typography>
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    </List> 
                </div>
                <div  style={{ width:'20%'}} ></div>
                <div style={{ width:'50%' }} >       
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <TripOriginIcon sx={{ color:'#20c997' }} />
                        </ListItemAvatar>
                        <ListItemText
                        primary="AIEP"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Systems Analysis Engineer
                            </Typography>
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <TripOriginIcon sx={{ color:'#20c997' }} />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Microsoft"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Microsoft Dynamics 365 Sales
                            </Typography>
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    </List> 
                </div>
            </div>
        </>
    )
}