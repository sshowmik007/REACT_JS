import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';
import { Grid } from '@mui/material';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('CR7');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
   

    <Grid justify= "center" container spacing={16}>
      <Grid item xs={12}>
        <Grid container spacing = {6}>
          <Grid item xs ={12}>
          <SearchBar onFormSubmit={search} />
            {/* Search bar */}
          </Grid>
          <Grid item xs ={6}>
            {/* Viideo DEtails */}
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs ={4}>
            {/* Video List */}
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </Grid>

        </Grid>

      </Grid>

    </Grid>

  );
};

export default App;
