import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider'

export default function About() {
    return (
        <Container maxWidth="lg" 
                   sx={{
                        mt: 4
                   }}>
            <Box>
                <Typography variant='h4' component='h2'>About me</Typography>
                <Divider sx={{borderBottomWidth: 2}}/>
            </Box>
        </Container>
    );
}