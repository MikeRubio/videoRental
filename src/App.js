
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Feed, VideoDetail, SearchFeed, LikedVideos, RentedVideos, ErrorRoute } from './components'
import { FavoriteProvider } from './context/FavoriteContext';
import { RentProvider } from './context/RentContext';

const App = () => {

  return (

    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <RentProvider>
          <FavoriteProvider>
            <Navbar />
            <Routes>
              <Route path='/' exact element={<Feed />} />
              <Route path='/video/:id' element={<VideoDetail />} />
              <Route path='/search/:searchTerm' element={<SearchFeed />} />
              <Route path='/liked' exact element={<LikedVideos />} />
              <Route path='/my-rented-videos' exact element={<RentedVideos />} />
              <Route path='*' element={<ErrorRoute />} />
            </Routes>
          </FavoriteProvider>
        </RentProvider>
      </Box>
    </BrowserRouter>
  )
}

export default App