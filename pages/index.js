import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider'
import { Avatar } from '@mui/material';
import Image from 'next/image';
import { getProjectData } from '../lib/projects';
import Project from '../components/Project'
import Link from '../components/Link';

export async function getStaticProps() {
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
            <Typography variant='h2' component='h2'>Home</Typography>
            <Divider sx={{borderBottomWidth: 2}}/>
            <Box sx={{mt: 2}}>
                <Avatar sx={{height:200, width:200, ml: 2, float: 'right'}}>
                    <Image alt="Eugene Jang" src='/profile.jpg' layout='fill'></Image>
                </Avatar>
                <Typography paragraph>
                    &emsp;&emsp;&emsp;Hello! My name is Eugene Jang (Korean: 장유진), currently based in Chicago,
                    and I am a senior at the University of Illinois at Urbana Champaign studying Computer Science.
                    I am currently looking for any full-time Software Engineering opportunities for Fall of 2023!
                    <br />
                    &emsp;&emsp;&emsp;It{"'"}s amazing to see so many parts of our world running on decades of discoveries
                    in Computer Science, and as someone who is newly joining the workforce, I want to use my expertise to
                    help make even one person{"'"}s life easier.
                    <br />
                    &emsp;&emsp;&emsp;Outside of school I am the vice president of Gah Rahk Mah Dang (GRMD, 가락마당), which is a
                    Korean drumming club at UIUC. Besides that, I like to cook, explore the outdoors, and play the violin.
                    <br />
                    &emsp;&emsp;&emsp;Please take a look at some of the side projects I have done over the years!
                </Typography>
            </Box>
            <Box sx={{mt: 2}}>
                <Typography variant='h3' component='h3'>
                    Projects
                </Typography>
                <Divider />
                {data.map((d) => {
                    return (<Project key={d.name} data={d} />)
                })}
            </Box>
            <Divider />
            <Box sx={{textAlign: "center", mt: 2}}>
                <Typography paragraph>
                    This website was made with Next.js. Please click 
                    on <Link href="https://github.com/EugMJang/EugeneJang" target="_blank">this link</Link> to view the Github.
                </Typography>
            </Box>
        </Container>
    );
}
