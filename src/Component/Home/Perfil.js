import Avatar from '@mui/material/Avatar';
import { Container } from '@mui/material';
import WorkReference from './WorkReference';
import Educations from './Education';
import Contact from './Contact';
import Skills from './Skills';

export default function Perfiles() {

    return(
        <div>
            <br></br>
                        <Container maxWidth="lg" sx={{ display:'flex', boxShadow:'0 2px 5px 0 rgba(0,0,0,.25),0 3px 10px 0 rgba(0,0,0,.2)!important'}} >
                            <div style={{ width:'30%', display:'contents'  }}>
                                <Avatar alt="Remy Sharp" 
                                src="https://www.grupodigital.eu/blog/wp-content/uploads/2019/11/gamer-decorative-illustration-flat-design_23-2148250394-e1574340136197.jpg" 
                                sx={{ width: 200, height: 200}}
                                />
                            </div>
                            <div style={{ width:'20%' }}></div>
                            <div style={{ width:'60%', display:'contents' }}>
                                <h3>{'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'}</h3>
                            </div>
                        </Container>
                        <br/>
                        <Container maxWidth="lg" sx={{ display:'content', boxShadow:'0 2px 5px 0 rgba(0,0,0,.25),0 3px 10px 0 rgba(0,0,0,.2)!important'}} >
                            <Skills />
                        </Container>
                        <br/>
                        <Container maxWidth="lg" sx={{ display:'content', boxShadow:'0 2px 5px 0 rgba(0,0,0,.25),0 3px 10px 0 rgba(0,0,0,.2)!important'}} >
                            <WorkReference />
                        </Container>
                        <br/>
                        <Container maxWidth="lg" sx={{ display:'content', boxShadow:'0 2px 5px 0 rgba(0,0,0,.25),0 3px 10px 0 rgba(0,0,0,.2)!important'}} >
                            <Educations />
                        </Container>
                        <br/>
                        <Container maxWidth="lg" sx={{ display:'flex', boxShadow:'0 2px 5px 0 rgba(0,0,0,.25),0 3px 10px 0 rgba(0,0,0,.2)!important', height:'380px' }} >
                            <Contact />
                        </Container>
        </div>
    )
}