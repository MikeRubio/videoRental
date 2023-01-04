
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Feed, VideoDetail, SearchFeed, LikedVideos } from './components'
import { FavoriteProvider } from './context/FavoriteContext';

const App = () => {

  return (
    <FavoriteProvider>
      <BrowserRouter>
        <Box sx={{ backgroundColor: '#000' }}>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Feed />} />
            <Route path='/video/:id' element={<VideoDetail />} />
            <Route path='/search/:searchTerm' element={<SearchFeed />} />
            <Route path='/liked' element={<LikedVideos />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </FavoriteProvider>
  )
}

export default App