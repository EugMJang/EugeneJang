import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from './Link';
import { AppBar, Button, Toolbar } from '@mui/material';

export default function Navbar() {
    return (
        <Box display="flex">
            <AppBar position='sticky'>
                <Container maxWidth="xl">
                    <Toolbar sx={{pt: 8, pb: 3}}>
                        <Typography variant='h3' component='h1' sx={{flexGrow: 1}}>
                            <Link href='/' color='inherit' underline='none'>
                                Eugene Jang
                            </Link>
                        </Typography>
                        <Box sx={{pt: 2}}>
                            <Button sx={{px: 2}} color='inherit'><Link href='https://github.com/EugMJang' target='_blank' color='inherit' underline='none'>Github</Link></Button>
                            <Button sx={{px: 2}} color='inherit'><Link href='https://www.linkedin.com/in/eugjang123/' target='_blank' color='inherit' underline='none'>LinkedIn</Link></Button>
                            <Button sx={{px: 2}} color='inherit'><Link href='/resume' color='inherit' underline='none'>Resume</Link></Button>
                            <Button sx={{px: 2}} color='inherit'><Link href='/contact' color='inherit' underline='none'>Contact me</Link></Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
