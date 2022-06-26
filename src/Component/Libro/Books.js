import Nav from "../Nav";
import { Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import Pagination from '@mui/material/Pagination';
import Tabs from '@mui/material/Tabs';
import Link from "next/link";
import { useState } from "react";
import Container from "@mui/material";


export default function Books() {

    const [libros, setlibros] = useState([]);
    const [page, setPage] = useState(1);
    const [namebook, setnamebook] = useState('');
    const [search, setsearch] = useState(false);
  
    const getBooks = async () => {
      
      await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${namebook}&maxResults=14&startIndex=${page}&key=AIzaSyDLXYdi5BS5bLe3O8DVGeWtTCp1eaCljvs`
      )
        .then((res) => res.json())
        .then((data) => {
          setlibros(data.items); 
          setsearch(true);  
        })
        .catch((err) => {
          console.error(err);
        });
    };
  
    return (
      <Box sx={{ width: '100%', minHeight: 377 }}>
        <Nav getLibros={getBooks} getNameLibros={(value) => setnamebook(value)} setPage={(value) => setPage(value)} setSearchStatus={search} nameNav={"Libros"}  />
        <br/>
        <Box sx={{ width: '100%', minHeight: 377 }}>
          <Masonry columns={7} spacing={2}>
          {
            libros && libros.map((books) => (
              <>
                  <Link href={`/libro/${books.id}`}>
                    <CardActionArea>
                        <Card sx={{ maxWidth: 345, minHeight: 300  }}>
                            <CardMedia
                              component="img"
                              height="140"
                              image={
                                books.volumeInfo.imageLinks !== undefined
                                  ? books.volumeInfo.imageLinks.thumbnail
                                  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1280px-No_image_3x4.svg.png'
                              }
                              alt="green iguana"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                              {books.volumeInfo.title}
                              </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                  </Link>
              </>
          ))
          }
          </Masonry>
          <Tabs centered>
            <Pagination count={14} page={page} onClick={(e) => {setPage(parseInt(e.target.innerText)); getBooks() }} />
          </Tabs>
        </Box>
      </Box>
    )
}
