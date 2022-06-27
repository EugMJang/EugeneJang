import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from './Link';
import { AppBar, Button, List, ListItem, ListItemText, Toolbar } from '@mui/material';
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
                        <Button sx={{px: 2}} color='inherit'><Link href='https://github.com/EugMJang' target='_blank' color='inherit' underline='none'>Github</Link></Button>
                        <Button sx={{px: 2}} color='inherit'><Link href='https://www.linkedin.com/in/eugjang123/' target='_blank' color='inherit' underline='none'>LinkedIn</Link></Button>
                        <Button sx={{px: 2}} color='inherit'><Link href='/resume' color='inherit' underline='none'>Resume</Link></Button>
                        <Button sx={{px: 2}} color='inherit'><Link href='/contact' color='inherit' underline='none'>Contact me</Link></Button>
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
                                <ListItem>
                                    <ListItemText>
                                        Github
                                    </ListItemText>
                                </ListItem>

                                <ListItem>
                                    <ListItemText>
                                        LinkedIn
                                    </ListItemText>
                                </ListItem>

                                <ListItem>
                                    <ListItemText>
                                        Resume
                                    </ListItemText>
                                </ListItem>

                                <ListItem>
                                    <ListItemText>
                                        Contact me
                                    </ListItemText>
                                </ListItem>
                            </List>
                            </Box>
                        </Drawer>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
