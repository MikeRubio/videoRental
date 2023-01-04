import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { Videos } from './';
import { fetchFromApi } from '../utils/fetchFromApi';
import { imdbMovieList } from '../utils/imdbMovieList';

const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromApi('', searchTerm)
            .then((data) => { setVideos(data.results) })
    }, [searchTerm])

    console.log(videos)
    if (!videos?.length) return 'Loading...';
    return (
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
            <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
                Search Results for:  <span style={{ color: '#008fbe' }}>{searchTerm}</span> videos
            </Typography>
            <Videos videos={videos} />
        </Box>
    )
}

export default SearchFeed