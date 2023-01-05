import { useState, useEffect } from 'react'
import { Box, Typography, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';

import { Videos } from './';
import { fetchFromApi } from '../utils/fetchFromApi';

import './SearchFeed.css';

const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromApi('', searchTerm)
            .then((data) => {
                if (data.total === 0) {
                    setError(true);
                } else {
                    setVideos(data.results);
                }
                setIsLoading(false)
            })
        return () => {
            setError(false);
            setIsLoading(true);
        }
    }, [searchTerm])

    return (
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
            {isLoading && <div className='circular-progress'>
                <CircularProgress size={50} />
            </div>}

            {error && <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
                We dont have the movie <span className='text-style'>{searchTerm}</span> available.
            </Typography>}
            {(!isLoading && !error) && <>
                <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
                    Search Results for:  <span className='text-style'>{searchTerm}</span> videos
                </Typography>
                <Videos videos={videos} enableActions={true} />
            </>}
        </Box>
    )
}

export default SearchFeed