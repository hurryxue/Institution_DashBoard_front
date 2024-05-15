import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MediaCard from "./memberCard";
import TextField from '@mui/material/TextField';


function CardGrid({institutions}) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredInstitutions = institutions.filter(institution =>
        institution.insitution_name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (

        <div>
            {(institutions.length > 10) && <TextField
                fullWidth
                label="Search by name"
                variant="outlined"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                sx={{}}
            />}
            <Grid container spacing={4} sx={{marginTop : 0}}>
                {filteredInstitutions.map((inst, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <MediaCard institution={inst}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default CardGrid;
