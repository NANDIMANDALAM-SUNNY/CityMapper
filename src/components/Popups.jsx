import React, { useContext } from 'react'
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { store } from '../App';
// import { Room, Star, StarBorder } from "@material-ui/icons";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { format } from "timeago.js";
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';





const Popups = ({p}) => {
    const {viewport,currentUsername,setViewport,setCurrentPlaceId} = useContext(store)

  return (
    <>
        <Popup
                key={p._id}
                latitude={p.lat}
                longitude={p.long}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setCurrentPlaceId(null)}
              >
                <Card sx={{ minWidth: 275 }} className="card">
                  <CardContent>
                  <label>Place</label>
                 
                    <Typography variant='h4' className="place"  sx={{ fontSize: 14 }} >
                    {p.title}
                    </Typography>
                    <label>Review</label>
                 
                    <Typography className='desc' variant="h6" >
                     {p.desc}
                    </Typography>
                    <label>Rating</label>
                  <Box className="stars">
                    {Array(p.rating).fill(<StarIcon className="star" />)}
                  </Box>
                    <label>Information</label>
                  <Typography variant='body2' className="username">
                    Created by <b>{p.username}</b>
                  </Typography>
                  <span className="date">{format(p.createdAt)}</span>
                  </CardContent>
              </Card>
            </Popup>
    </>
  )
}

export default Popups