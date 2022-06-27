import * as React from 'react'
import { Box } from "@mui/material"
import { Typography } from "@mui/material"
import { Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from './Link';

export default function Project({data}) {
    console.log(data);
    return (
        <Box>
            <Box sx={{display: 'flex', mt: 2}}>
                <Box sx={{display: 'flex', flexGrow: 1}}>
                    <Typography variant='h5' component='h4'>
                        {data.name}
                    </Typography>
                </Box>
                <Typography sx={{mt: 0.5}}paragraph>
                    {data.date}
                </Typography>
            </Box>
            <List>
                {data.desc.map((desc) => {
                    return (
                        <ListItem key={desc}>
                            <ListItemIcon>
                                <ChevronRightIcon />
                            </ListItemIcon>
                            <ListItemText>
                                {desc}
                            </ListItemText>
                        </ListItem>
                    )
                })}
                <ListItem>
                    <Button variant='contained' sx={{mb: 2}}>
                        <Link href={data.url} target='_blank' passHref color='inherit' underline='none'>
                            Click here to view!
                        </Link>
                    </Button>
                </ListItem>
            </List>
        </Box>
    );
}