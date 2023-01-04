import { Box, Stack } from '@mui/material'
import { VideoCard } from './'

const Videos = ({ videos, direction, enableActions }) => {

    if (!videos?.length) return 'Loading...';
    return (
        <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
            {videos ? videos.filter(v => v.imdbid).map((video) => (
                <Box key={video.id}>
                    <VideoCard enableActions={enableActions} video={video} />
                </Box>
            ))
                : <span>No videos found</span>}
        </Stack>
    )
}

export default Videos