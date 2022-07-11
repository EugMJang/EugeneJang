import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from './Link';
import { AppBar, Button, List, ListItem, ListItemButton, Toolbar } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
    const [open, setOpen] = React.useState(false);
    return (
        <AppBar position='sticky'>
            <Container maxWidth="xl">
                <Toolbar sx={{pt: 8, pb: 3}}>
                    <Typography variant='h1' component='h1' sx={{
                        flexGrow: 1, 
                        display: {
                            xs: 'block',
                        },
                    }}>
                        <Link href='/' color='inherit' underline='none'>
                            Eugene Jang
                        </Link>
                    </Typography>
                    <Box sx={{pt: 4, display: {
                        xs: 'none',
                        md: 'block'
                    }}}>
                        <Link href='/' color='inherit' underline='none' passHref><Button sx={{px: 2}} color='inherit'>Home</Button></Link>
                        <Link href='https://github.com/EugMJang' target='_blank' color='inherit' underline='none' passHref><Button sx={{px: 2}} color='inherit'>Github</Button></Link>
                        <Link href='https://www.linkedin.com/in/eugjang123/' target='_blank' color='inherit' underline='none' passHref><Button sx={{px: 2}} color='inherit'>LinkedIn</Button></Link>
                        <Link href='/resume' color='inherit' underline='none' passHref><Button sx={{px: 2}} color='inherit'>Resume</Button></Link>
                    </Box>
                    <Box sx={{pt: 4, display: {
                        xs: 'block',
                        md: 'none'
                        },
                    }}>
                        <Button sx={{px: 2}} color='inherit' onClick={() => setOpen(true)}><MenuIcon /></Button>
                        <Drawer
                            anchor="right"
                            open={open}
                            onClick={() => setOpen(false)}
                        >
                            <Box sx={{
                                width: 200,
                            }}>
                            <List>
                                <Link href='/' color='inherit' underline='none' passHref>
                                    <ListItem>
                                            <ListItemButton>
                                                Home
                                            </ListItemButton>
                                    </ListItem>
                                </Link>
                                <Link href='https://github.com/EugMJang' target='_blank' color='inherit' underline='none' passHref>
                                    <ListItem>
                                            <ListItemButton>
                                                Github
                                            </ListItemButton>
                                    </ListItem>
                                </Link>
                                <Link href='https://www.linkedin.com/in/eugjang123/' target='_blank' color='inherit' underline='none'>
                                    <ListItem>
                                        <ListItemButton>
                                            LinkedIn
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                                <Link href='/resume' color='inherit' underline='none'>
                                    <ListItem>
                                        <ListItemButton>
                                            Resume
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            </List>
                            </Box>
                        </Drawer>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
