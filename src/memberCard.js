import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
// import * as Bokeh from '@bokeh/bokehjs';



function MediaCard({institution}) {
    const navigate = useNavigate();
    const handleClick = (event, fileID) => {
        console.log('Button clicked with event:', event);
        console.log('Extra parameter:', fileID);
        navigate('/Report', { state: fileID });
    }
    return (
        <Card sx={{ height: 250 }}>
            <CardMedia
                component="img"
                height="50"
                image="static/arXiv-logo.png"
                sx={{
                    maxWidth: 150,
                    height: 65,
                    marginLeft:1,
                    marginTop:1,
                    borderRadius: '10px',
                    // border: '1px solid #ccc'
                }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {institution.insitution_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {institution.institution_info}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={(event) => handleClick(event, institution.institution_file_id)}>view</Button>
            </CardActions>
        </Card>
    );
}

export default MediaCard;