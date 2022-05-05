import './VideoItem.css';
import React from 'react';
import { Grid,Paper,Typography } from '@mui/material';

const VideoItem = ({ video, onVideoSelect }) => (
  <Grid item xs={12}>
    <Paper style={{display: "flex", alignItems: "center"}}
    onClick={() => onVideoSelect(video)} className="video-item item">
      <img style={{marginRight: '20px'}} src={video.snippet.thumbnails.medium.url} alt="thumble" />
      <Typography variant='subtitle1'> <b>{video.snippet.title}</b> </Typography>
    </Paper>
    </Grid>
);


export default VideoItem;
