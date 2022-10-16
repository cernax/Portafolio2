import { useState, useRef, useEffect } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Fab from '@mui/material/Fab';
import Perfiles from '../Home/Perfil';
import Image from 'next/image';
import imguser from '../img/imguser.jpg';
import { Container } from '@mui/material';


export default function Inicio() {
    const scrollHandle = (e, idname) => {
        e.preventDefault();
        let position = document.getElementById(idname); //removing extra last - (dash)
        position && position.scrollIntoView({ behavior: "smooth", block: "start" }) //scrolling the page
    }

    useEffect( () =>{

    },[] )
    return (
        <>
            <div id="header" >                 
                <Container maxWidth="lg" sx={{ display:'flex', height:'100%', paddingTop: '15%', paddingBottom: '15%' }} >
                    <div style={{ width:'40%', paddingLeft:'18%' }}>                             
                        <div className="content">
                            <h1><span>Hi, I'm Andres, Web Developer.</span></h1>
                            <LinkedInIcon />
                            <GitHubIcon />
                        </div>
                    </div>
                    <div style={{ width:'10%' }}></div>
                    <div style={{ width:'60%'}}>                    
                        <Image
                            src={imguser}
                            alt='user profile picture'                        
                            width={300}
                            height={300}
                            style={{ borderRadius:'10%' }}
                        />
                    </div>
                </Container>           
                <div>
                    <Fab color="primary" aria-label="add" style={{ top:'90%', left:'48.5%', position:'absolute', transform: 'translate('-90%', '-48.5%')' }}
                        href="#personalinfo" onClick={ (e) => scrollHandle(e, "personalinfo")}>
                        <KeyboardArrowDownIcon />
                    </Fab>
                </div>
            </div>
            <div>
                <div id='personalinfo' style={{ height:'1400px' }}>
                    <Perfiles />
                </div>
            </div>
        </>
    )
}