import { useNavigate } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';

import './ErrorRoute.css';

const ErrorRoute = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Typography variant="h1" className='text'>
                404
            </Typography>
            <Typography variant="h6" className='text'>
                This is a message from the  telling you that this page is not ready in the <bold>PRESENT</bold>.
            </Typography>
            <Button variant="outlined" onClick={() => navigate('/')}>Back Home</Button>
        </Box>
    );
}

export default ErrorRoute