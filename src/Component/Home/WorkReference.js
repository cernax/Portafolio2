import TripOriginIcon from '@mui/icons-material/TripOrigin';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function WorkReference() {
    return (
        <>
            <Typography sx={{ display: 'inline', width:'50%' }} component="span" variant="h4" color="text.primary">                    
                Work Reference
            </Typography>
            <br/>
            <div style={{ width:'100%', display:'flex'}} >
                <div style={{ width:'50%'  }} >       
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start" sx={{ paddingTop:'2%', paddingBottom:'5%' }}>
                        <ListItemAvatar>
                            <TripOriginIcon sx={{ color:'#39c0ed' }} />
                        </ListItemAvatar>
                        <ListItemText
                        primary="GETS S.A"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                QA Analyst
                            </Typography>
                            {" — Concept tests, test automation, process documentation, technical support."}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start" sx={{ paddingTop:'2%', paddingBottom:'5%' }}>
                        <ListItemAvatar>
                            <TripOriginIcon sx={{ color:'#39c0ed' }} />
                        </ListItemAvatar>
                        <ListItemText
                        primary="CMetrix"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Support Engineer - SharePoint Consultant
                            </Typography>
                            {" — Mention and resolution of incidents on the dynamics 365 and onpremise tool. Creation of custom developments in sharepoint and workflows with automation and app with powerapps"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start" sx={{ paddingTop:'2%', paddingBottom:'5%' }}>
                        <ListItemAvatar>
                            <TripOriginIcon sx={{ color:'#39c0ed' }} />
                        </ListItemAvatar>
                        <ListItemText
                        primary="XMS"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                BS Support
                            </Typography>
                            {" — creation, modification and analysis of solutions in .net of massive loads, console, api's web service, plugin and custom workflow activity, flows in automation and applications with powerapps for crm 365 and sharepoint"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    </List> 
                </div>
                <div  style={{ width:'20%' }} ></div>
                <div style={{ width:'50%' }} >       
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start" sx={{ paddingTop:'2%', paddingBottom:'5%' }}>
                        <ListItemAvatar>
                            <TripOriginIcon sx={{ color:'#39c0ed' }} />
                        </ListItemAvatar>
                        <ListItemText
                        primary="DIMENSIÓN"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Web Developer
                            </Typography>
                            {" — resolution of incidents, massive and unitary management in night processes in collection systems"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start" sx={{ paddingTop:'2%', paddingBottom:'15%' }}>
                        <ListItemAvatar>
                            <TripOriginIcon sx={{ color:'#39c0ed' }} />
                        </ListItemAvatar>
                        <ListItemText
                        primary="VISUALMENTE"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Sharepoint Developer
                            </Typography>
                            {" — creation, modification and maintenance of developments on sharepoint edition of form and consumption of native api's"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start" sx={{ paddingTop:'2%', paddingBottom:'17%' }}>
                        <ListItemAvatar>
                            <TripOriginIcon sx={{ color:'#39c0ed' }} />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Coopeuch"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                CRM Developer
                            </Typography>
                            {" — maintenance, resolution of incidents, creation of plugin, web service, workflow and custom workflow activity on crm onpremise"}
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