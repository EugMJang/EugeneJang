import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider'
import { Avatar } from '@mui/material';
import Image from 'next/image';
import { getProjectData } from '../lib/projects';
import Project from '../components/Project'

export async function getStaticProps() {
    console.log(getProjectData())
    return {
        props: {
            data: getProjectData(),
        }
    }
}

export default function Index({data}) {
    return (
        <Container maxWidth="lg" 
                   sx={{
                        mt: 4
                   }}>
            <Box>
                <Typography variant='h3' component='h2'>Home</Typography>
                <Divider sx={{borderBottomWidth: 2}}/>
            </Box>
            <Box sx={{mt: 2}}>
                <Box>
                    <Avatar sx={{height:200, width:200, ml: 2, float: 'right'}}>
                        <Image src='/profile.jpg' layout='fill'></Image>
                    </Avatar>
                    <Typography paragraph>
                        &emsp;&emsp;&emsp;Hello! My name is Eugene Jang (Korean: 장유진), currently based in Chicago, 
                        and I study computer science at the University of Illinois at Urbana Champaign.
                        As a senior in college, I am currently looking for any full-time opportunities for Fall of 2023!
                        <br />
                        &emsp;&emsp;&emsp;In the meantime, please take a look at some of the side projects I have done over the years.

                    </Typography>
                    <Typography variant='h4' component='h3' sx={{mt: 2}}>
                        Projects
                    </Typography>
                    <Divider />
                </Box>
                {data.map((d) => {
                    return (<Project data={d} />)
                })}
            </Box>
        </Container>
    );
}
