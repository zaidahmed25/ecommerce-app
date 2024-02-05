import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {  Navigate, useNavigate } from 'react-router-dom';
import useSavePost from '../context/savePost';

export default function MediaCard({title, body, id}) {

    const Navigate = useNavigate()
    const { setSavePost , savePost } = useSavePost();
    
    const gotoproduct = ()=> {
        Navigate(`/product/${id}`)
    }

    const savepost = (event)=> {
        event.stopPropagation()
        console.log('savepost clicked');
        setSavePost([...savePost])
    }


  return (
    <Card sx={{ maxWidth: 345 , cursor: 'pointer'}} onClick={gotoproduct} >
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1706650079706-239c03b3cadd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={savepost} >Save Post</Button>
      </CardActions>
    </Card>
  );
}