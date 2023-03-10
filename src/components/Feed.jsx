import { useState, useEffect } from 'react'
import { Stack, Box, Typography, CircularProgress } from '@mui/material';

import { SideBar, Videos } from './';
import { fetchFromApi } from '../utils/fetchFromApi';

import './Feed.css';

const Feed = () => {
    const [selectedCat, setSelectedCat] = useState(['Family comedy', '52847']);
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchFromApi(selectedCat[1])
            .then((data) => {
                setVideos(data.results.filter(imdb => imdb.imdbrating !== null));
                setIsLoading(false);
            })
    }, [selectedCat])

    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #008fbe', px: { sx: 0, md: 2 } }}>
                <SideBar selectedCat={selectedCat} setSelectedCat={setSelectedCat} />
                <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
                    Miguel Rubio - PER7610 2022-2023
                </Typography>
            </Box>
            {isLoading
                ? <div className='circular-progress'>
                    <CircularProgress size={50} />
                </div>
                : <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
                    <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
                        {selectedCat[0]}  <span className='title'>Videos</span>
                    </Typography>
                    <Videos videos={videos} enableActions={true} />
                </Box>
            }
        </Stack >
    )
}

export default Feed