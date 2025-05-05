import { Button, Grid, TextField, Typography, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const Addblog = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    imageurl: ''
  });
  const navigate=useNavigate();
  const location=useLocation();
  function capValue(){
  if(location.state!=null){
    axios.put('http://localhost:3000/blogg/edit/'+location.state.val._id,form).then((res)=>{
      alert('Update Successful!!')
    }).catch((err)=>{
      console.log(err)
    })
  }else{
    axios.post('http://localhost:3000/blogg/add',form).then((res)=>{
      alert('Blog added Successful!!')
      navigate('/blog')
    }).catch((err)=>{
      console.log(err)
      alert('Failed to add blog');
      navigate('/blog')
    })
  }
  }

  useEffect(()=>{
    if(location.state!=null){
      setForm({...form,title:location.state.val.title,
        description:location.state.val.description,
        imageurl:location.state.val.imageurl
      })
    }
    else{
      setForm({...form,title:'',
        description:'',
        imageurl:''
      })
    }
  },[])
  // const handleSubmit = () => {
  //   axios.post('http://localhost:3000/blogg/add', form)
  //     .then(res => {
  //       console.log(res.data);
  //       alert('Blog added successfully');
  //       setForm({ title: '', description: '', imageurl: '' });
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       alert('Failed to add blog');
  //     });
  // };


  return (
    <Grid container justifyContent="center" style={{ marginTop: '5%' }}>
      <Grid item xs={12} sm={10} md={6} lg={5}>
        <Paper elevation={3} style={{ padding: '30px', borderRadius: '15px' }}>
          <Typography variant="h5" gutterBottom align="center">
            Add New Blog
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Blog Title"
                variant="outlined"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                // rows={4}
                label="Blog Description"
                variant="outlined"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image URL"
                variant="outlined"
                value={form.imageurl}
                onChange={(e) => setForm({ ...form, imageurl: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                // onClick={handleSubmit}
                size="large"
              >
                Add Blog
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Addblog;
