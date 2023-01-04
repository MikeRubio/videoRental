import { useState, useEffect } from 'react'
import { Stack, Box, Typography } from '@mui/material';

import { SideBar, Videos } from './';
import { fetchFromApi } from '../utils/fetchFromApi';
import { imdbMovieList } from '../utils/imdbMovieList';

const Feed = ({ addToFavorite, setAddToFavorite }) => {
    const [selectedCat, setSelectedCat] = useState(['Dramas militares', '11']);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        // fetchFromApi(selectedCat[1])
        //     .then((data) => { setVideos(data.results) })
        setVideos(imdbMovieList)
    }, [selectedCat])

    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #008fbe', px: { sx: 0, md: 2 } }}>
                <SideBar selectedCat={selectedCat} setSelectedCat={setSelectedCat} />
                <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
                    Miguel Rubio - PER7610 2022-2023
                </Typography>
            </Box>
            <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
                <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
                    {selectedCat[0]}  <span style={{ color: '#008fbe' }}>Videos</span>
                </Typography>
                <Videos videos={videos} enableActions={true} addToFavorite={addToFavorite} setAddToFavorite={setAddToFavorite} />
            </Box>
        </Stack>
    )
}

export default Feed