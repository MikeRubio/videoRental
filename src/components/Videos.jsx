import { Box, Stack } from '@mui/material'
import { VideoCard } from './'

const Videos = ({ videos, direction, enableActions, addToFavorite, setAddToFavorite }) => {
    const addVideoToFavorite = (video) => {
        const parsedArray = addToFavorite ? addToFavorite : [];
        const newArray = [...parsedArray, video];
        setAddToFavorite(newArray);
    }

    if (!videos?.length) return 'Loading...';
    return (
        <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
            {videos ? videos.filter(v => v.imdbid).map((video) => (
                <Box key={video.id}>
                    <VideoCard enableActions={enableActions} video={video} addToFavorite={addToFavorite} addVideoToFavorite={addVideoToFavorite} />
                </Box>
            ))
                : <span>No videos found</span>}
        </Stack>
    )
}

export default Videos