
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Feed, VideoDetail, SearchFeed, LikedVideos } from './components'
import { useLocalStorage } from './hooks/useLocalStorage';
import { FAVORITE_LOCAL_STORAGE_KEY } from './utils/constants';

const App = () => {
  const [addToFavorite, setAddToFavorite] = useLocalStorage(FAVORITE_LOCAL_STORAGE_KEY, [])

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar addToFavorite={addToFavorite} setAddToFavorite={setAddToFavorite} />
        <Routes>
          <Route path='/' exact element={<Feed addToFavorite={addToFavorite} setAddToFavorite={setAddToFavorite} />} />
          <Route path='/video/:id' element={<VideoDetail addToFavorite={addToFavorite} setAddToFavorite={setAddToFavorite} />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
          <Route path='/liked' element={<LikedVideos addToFavorite={addToFavorite} />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App