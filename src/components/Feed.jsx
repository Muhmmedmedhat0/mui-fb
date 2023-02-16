import React from "react";
import Box from '@mui/material/Box';
import Post from './Post';


function Feed() {
  return (
    <Box flex={4} backgroundcolor="#eee" padding={2} sx={{paddingTop:7}}>
      <Post background='https://images.pexels.com/photos/5357344/pexels-photo-5357344.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>
      <Post background='https://images.pexels.com/photos/12301513/pexels-photo-12301513.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>
      <Post background='https://images.pexels.com/photos/15254895/pexels-photo-15254895.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>
      <Post background='https://images.pexels.com/photos/8356751/pexels-photo-8356751.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>
      <Post background='https://images.pexels.com/photos/13329163/pexels-photo-13329163.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>
    </Box>
  );
}

export default Feed;
