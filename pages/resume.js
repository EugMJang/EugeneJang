import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider'

export default function Resume() {
    return (
        <Container maxWidth="lg" 
                   sx={{
                        mt: 4
                   }}>
            <Box>
                <Typography variant='h2' component='h2'>Resume</Typography>
                <Divider sx={{borderBottomWidth: 2}}/>
            </Box>
            <Box display='flex' sx={{justifyContent: 'center', mt: 2}}>
                <iframe src="/Resume.pdf" 
                    width="800" 
                    height="600"></iframe>
            </Box>
        </Container>
    );
}