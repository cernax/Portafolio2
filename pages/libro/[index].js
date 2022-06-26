/* eslint-disable react-hooks/rules-of-hooks */
import Nav from '../../src/Component/Nav';
import { useRouter } from 'next/router';
import { useEffect,  useState } from 'react';
import { Box, Container } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

export default function libro() {

    const router = useRouter(); 
    const [ libro, setLibro ] = useState(null);
    const [page, setPage] = useState(1);
    const [namebook, setnamebook] = useState('');
    const id = router.query.index;

    const getBooks = async () => {
    
    if(id !== undefined){
        await fetch(
          `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyDLXYdi5BS5bLe3O8DVGeWtTCp1eaCljvs`
        )
          .then((res) => res.json())
          .then((data) => {
              if(id !== undefined){
                debugger;
                setLibro(data);
              }
          })
          .catch((err) => {
            console.error(err);
          });
      };
    }

    useEffect(
        () => {
            getBooks();
        },[]
    );

    return(
        <div>
            <Nav getLibros={getBooks} getNameLibros={(value) => setnamebook(value)} setPage={(value) => setPage(value)} setSearchStatus={true}  />
            { libro && <Box sx={{ width: '100%', minHeight: 377 }}>
                <h1>{libro.volumeInfo.title}</h1>
                <img src={libro.volumeInfo.imageLinks.thumbnail} width='10%' alt=""/>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="body2">
                            <div dangerouslySetInnerHTML={{__html: libro.volumeInfo.description}} />
                        </Typography>
                    </CardContent>
                    </Card>
            </Box> }
        </div>
    )
}