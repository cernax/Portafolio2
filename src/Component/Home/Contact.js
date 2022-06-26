import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';

export default function Contact() {
    return(
        <>
            <div>
                <Typography sx={{ display: 'inline'}} component="span" variant="h4" color="text.primary">                    
                    Contact
                </Typography>
                <br/>
                    <LocalPhoneIcon /> { '+56979090727' }
                <br/>
                    <EmailIcon /> { 'corro.andres2@gmail.com' }
                <br/>
                <Typography sx={{ display: 'inline'}} component="div" color="text.primary">    
                    <div style={{ marginTop:'10px' }} >
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </div>     
                    <div style={{ marginTop:'10px' }} >
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </div>     
                    <div style={{ marginTop:'10px' }} >                
                        <TextField
                            id="outlined-multiline-static"
                            label="Multiline"
                            multiline
                            rows={2}
                            defaultValue=""
                        />
                    </div>    
                    <div style={{ marginTop:'5px' }} >
                        <Button variant="contained" color='success' endIcon={<SendIcon />}>
                        Send
                        </Button>
                    </div>     
                </Typography>
            </div>
        </>    
    )
}