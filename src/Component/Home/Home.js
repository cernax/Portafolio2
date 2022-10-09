import { useState, useRef, useEffect } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Fab from '@mui/material/Fab';
import Perfiles from '../Home/Perfil';

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
        <div className="container" id="header" >
            <div className="centered">
                <h3><span>Andres Corro</span></h3>
                <h2>Desarrollador Web</h2>
                <LinkedInIcon />
                <GitHubIcon />
            </div>
            <div>
                <Fab  color="primary" aria-label="add" style={{ top:'90%', left:'48.5%', position:'absolute', transform: 'translate('-90%', '-48.5%')' }}
                    href="#personalinfo" onClick={ (e) => scrollHandle(e, "personalinfo")}>
                    <KeyboardArrowDownIcon />
                </Fab>
            </div>
        </div>
        <style jsx>{`

                    .container {   
                        position: relative;
                        height: 93.5vh;
                        min-height: 100%;
                        width: 100%;
                        background: #161415 url(https://www.grupodigital.eu/blog/wp-content/uploads/2019/11/gamer-decorative-illustration-flat-design_23-2148250394-e1574340136197.jpg) no-repeat top center;
                        background-size: cover !important;
                        -webkit-background-size: cover !important;
                        text-align: center;
                        overflow: hidden;
                        transition:width 0.3s ease-in-out 0s;
                        position: relative;
                        text-align: center;
                        color: white;
                    }

                    /* Centered text */
                    .centered {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    }
                    h3 {
                        text-align: center;
                        display: block;
                        overflow: hidden;
                        margin: 15px 20px 0;
                        font-size: 2.5rem;
                        
                        span {
                        font-weight: 100;
                        height: 30px;
                        position: relative;
                        display: inline-block;
                        font-size: 20px;
                        
                        &::before,
                        &::after {
                            content: "";
                            position: absolute;
                            top: 35%;
                            height: 1px;
                            background: #757575;
                            width: 99999px;
                        }
                        
                        &::before {
                            left: 100%;
                            margin-left: 60px;
                        }
                        &::after {
                            right: 100%;
                            margin-right: 60px;
                        }
                        }
                    }
        `}</style>
            <div>
                <div id='personalinfo' style={{ height:'1450px' }}>
                <Perfiles />
                </div>
            </div>
        </>
    )
}