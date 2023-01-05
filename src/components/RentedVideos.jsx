import { useContext } from 'react';
import { Box, Stack, Typography } from '@mui/material'

import { Videos } from './';
import RentContext from '../context/RentContext';

const RentedVideos = () => {
    const { rented } = useContext(RentContext);

    return (
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
            <Box minHeight='95vh' m={2} px={2} py={{ md: 1, xs: 5 }} justifyContent='center'>
                <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
                    {/* My rented <span style={{ color: '#008fbe' }}>Videos</span> */}
                </Typography>
                {rented.length
                    ? <Videos videos={rented} enableActions={true} />
                    : <span style={{ color: '#008fbe' }}>No rented videos found</span>
                }
            </Box>
        </Box >
    )
}

export default RentedVideos