import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate=useNavigate()
  useEffect(()=>{
    axios.get('http://localhost:3000/blogg')
    .then(res=>setBlogs(res.data))
    .catch(err=>console.log(err))
  },[])
  function updateData(val){
    navigate('/addblog',{state:{val}})
  }

  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
    <Grid container spacing={2}>
  {blogs.map((blog, index) => (
    <Grid item xs={12} md={3} key={index}>
      <Card sx={{ maxWidth: 600 }}>
        <CardMedia
          sx={{ height: 140 , width:300}}
          image={blog.imageurl}
          title={blog.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {blog.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {blog.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button  sx={{ backgroundColor: 'green',color:'white' }} onClick={()=>{
            updateData(blog)
          }}>UPDATE</Button>
          <Button sx={{ backgroundColor: 'red',color:'white' }}>DELETE</Button>
        </CardActions>
      </Card>
    </Grid>
  ))}
</Grid>

  </Box>
  )
}

export default Blog
