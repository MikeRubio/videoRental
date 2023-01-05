import { useContext } from 'react';
import { Box, Typography } from '@mui/material'

import FavoriteContext from '../context/FavoriteContext';
import { Videos } from './';

const LikedVideos = () => {
    const { addToFavorite } = useContext(FavoriteContext);
    return (
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
            <Box minHeight='95vh' m={2} px={2} py={{ md: 1, xs: 5 }} justifyContent='center'>
                <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
                    Liked <span style={{ color: '#008fbe' }}>Videos</span>
                </Typography>
                {addToFavorite.length
                    ? <Videos videos={addToFavorite} enableActions={true} />
                    : <span style={{ color: '#008fbe' }}>No liked videos yet</span>
                }
            </Box>
        </Box >
    )
}

export default LikedVideos