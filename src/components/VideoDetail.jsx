import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Typography, Box, Stack } from "@mui/material";

import ReactPlayer from 'react-player';
import parse from 'html-react-parser';

import { Videos } from './';
import { getTraillerIdFromApi, getTraillerLinkFromApi } from '../utils/fetchFromApi';
import { imdbMovieList } from '../utils/imdbMovieList';
import { decodeURL } from '../utils/encode';

const VideoDetail = () => {
    const { id } = useParams();
    const [traillerDetails, setTraillerDetails] = useState('');
    const [traillerUrl, setTraillerUrl] = useState('');
    const [recomendedVideos, setRecomendedVideos] = useState([]);
    const [error, setError] = useState(true);

    // useEffect(() => {
    //     getTraillerIdFromApi(parse(decodeURL(id))).then(({ resource }) => {
    //         setTraillerDetails(resource);

    //         if (resource.size !== 0) {
    //             getTraillerLinkFromApi(resource?.videos[0]?.id.split('/')[2]).then(({ resource }) => {
    //                 setTraillerUrl(resource?.encodings[1]?.playUrl)
    //             })
    //         } else setError(true);
    //     })
    //     setRecomendedVideos(imdbMovieList)
    // }, [id])

    return (
        <Box minHeight='95vh'>
            <Stack flexDirection={{ xs: 'column', md: 'row' }}>
                <Box flex={1}>
                    {error ? <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
                        We are working to add this video
                    </Typography> : <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
                        <ReactPlayer url={traillerUrl} className='react-player' controls />
                        <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
                            {traillerDetails.title}
                        </Typography>
                        <Stack direction='row' justifyContent='start' sx={{ color: '#fff' }} py={1} px={2}>
                            <Typography color='#fff' variant='body1' p={1}>
                                Duration: {traillerDetails?.videos[0]?.durationInSeconds}sec
                            </Typography>
                            <Typography color='#fff' variant='body1' p={1}>
                                released: {traillerDetails?.year}
                            </Typography>
                            <Typography color='#fff' variant='body1' p={1}>
                                Lang: {traillerDetails?.videos[0]?.audioLanguage}
                            </Typography>
                        </Stack>
                        <Typography color='#fff' variant='body2' p={1}>
                            {traillerDetails?.videos[0]?.description}
                        </Typography>
                    </Box>}
                </Box>
                <Box px={2} py={{ md: 1, xs: 5 }} justifyContent='center'>
                    <Videos videos={recomendedVideos} enableActions={false} direction='column' />
                </Box>
            </Stack >
        </Box >
    )
}

export default VideoDetail