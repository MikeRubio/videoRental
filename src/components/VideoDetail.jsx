import { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Typography, Box, Stack, CircularProgress } from "@mui/material";

import ReactPlayer from 'react-player';
import parse from 'html-react-parser';

import { Videos } from './';
import { getTraillerIdFromApi, getTraillerLinkFromApi } from '../utils/fetchFromApi';
import { imdbMovieList } from '../utils/imdbMovieList';
import { decodeURL } from '../utils/encode';

import RentContext from '../context/RentContext';

import './VideoDetail.css';

const VideoDetail = () => {
    const { id } = useParams();
    const [traillerDetails, setTraillerDetails] = useState('');
    const [traillerUrl, setTraillerUrl] = useState('');
    const [recomendedVideos, setRecomendedVideos] = useState([]);
    const [error, setError] = useState(false);
    const [isRented, setIsRented] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [decodedId, setDecodedId] = useState('');

    const { rented } = useContext(RentContext);

    useEffect(() => {
        console.log(id)
        setDecodedId(parse(decodeURL(id)));
    }, [id])

    useEffect(() => {
        setIsRented(Boolean(rented.find(elm => elm.imdbid === decodedId)));
    }, [decodedId])

    useEffect(() => {
        if (isRented) {
            getTraillerIdFromApi(decodedId)
                .then(({ resource }) => {
                    setTraillerDetails(resource);
                })
                .catch(() => {
                    setError(true);
                    setLoading(false);
                    alert("Sorry we could't find your movie");
                });
        } else {
            setError(true);
        }
        setRecomendedVideos(imdbMovieList.sort(() => .5 - Math.random()).slice(0, 6))
    }, [isRented])

    useEffect(() => {
        if (Boolean(traillerDetails)) {
            if (traillerDetails?.videos?.length) {
                getTraillerLinkFromApi(traillerDetails?.videos[0]?.id.split('/')[2]).then(({ resource }) => {
                    setTraillerUrl(resource?.encodings[1]?.playUrl)
                    setError(false);
                    setLoading(false);
                })
            } else {
                setError(true);
                setLoading(false);
            };
        }

    }, [traillerDetails])

    return (
        <Box className='container'>
            {isLoading
                ? <div className='circular-progress'>
                    <CircularProgress size={90} />
                </div>
                : <Stack flexDirection={{ xs: 'column', md: 'column' }}>
                    {error
                        ? <Typography color='#fff' variant='h2' fontWeight='bold' p={2}>
                            Opps! something went wrong
                        </Typography>
                        : <Box flex={1}>
                            <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
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
                            </Box>
                        </Box>
                    }
                    <Box px={2} py={{ md: 2, xs: 5 }} justifyContent='center'>
                        <Videos videos={recomendedVideos} enableActions={true} direction='row' />
                    </Box>
                </Stack >
            }
        </Box >
    )
}

export default VideoDetail