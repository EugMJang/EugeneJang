import * as React from 'react'
import { Box } from "@mui/material"
import { Typography } from "@mui/material"
import { Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from './Link';

export default function Project({data}) {
    return (
        <Box>
            <Box sx={{display: 'flex', mt: 2}}>
                <Box sx={{flexGrow: 1}}>
                    <Typography variant='h5' component='h4'>
                        {data.name}
                    </Typography>
                </Box>
                <Typography sx={{
                    mt: 0.5,
                    display: {
                        xs: 'none',
                        md: 'block'
                    }
                    }} paragraph>
                    {data.date}
                </Typography>
            </Box>
            <Typography sx={{
                mt: 0.5,
                display: {
                    xs: 'block',
                    md: 'none'
                }
                }} paragraph>
                {data.date}
            </Typography>
            <List>
                {data.desc.map((desc) => {
                    return (
                        <ListItem key={desc}>
                            <ListItemIcon sx={{
                                display: {
                                    xs: 'none',
                                    md: 'block'
                                }
                            }}>
                                <ChevronRightIcon />
                            </ListItemIcon>
                            <ListItemText>
                                {desc}
                            </ListItemText>
                        </ListItem>
                    )
                })}
                
                <ListItem>
                    <Link href={data.url} target='_blank' passHref color='inherit' underline='none'>
                        <Button variant='contained'>
                                Click here to view!
                        </Button>
                    </Link>
                </ListItem>
            </List>
        </Box>
    );
}