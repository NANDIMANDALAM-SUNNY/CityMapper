import React, { useContext, useEffect, useState } from 'react'
import { store } from '../App'
import  {NavigationControl} from 'react-map-gl';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import axios from "axios";
import { format } from "timeago.js";
import Markers from './Markers';
import Popups from './Popups';
import AddPin from './AddPin';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Main = () => {
  const navigate = useNavigate()
    const {
        currentUsername, setCurrentUsername,
        pins, setPins,
      currentPlaceId, setCurrentPlaceId,
      newPlace, setNewPlace,
      title, setTitle,
      desc, setDesc,
      star, setStar,
      viewport, setViewport,
      showRegister, setShowRegister,
      showLogin, setShowLogin,
      handleMarkerClick,
      handleSubmit,handleAddClick,
      myStorage
    
    } = useContext(store)

    const [layer, setLayer] = useState("mapbox://styles/sunny170/ckzcpfseb000r15nuiyi5bm56");

    const handleChange = (event) => {
      setLayer(event.target.value);
    };


    const handleLogout = () => {
      setCurrentUsername(null);
      myStorage.removeItem("user");
      navigate('/login')
    };

  useEffect(()=>{
   

  },[layer])
  if(currentUsername == null){
    navigate('/login')
  } 

  return (
    <>
    <div style={{ height: "100vh", width: "100%" }}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_APIKEY}
        width="100%"
        height="100%"
        transitionDuration="200"
        mapStyle={layer}
        onViewportChange={(viewport) => setViewport(viewport)}
        onDblClick={currentUsername && handleAddClick} 
      >
        <NavigationControl  />
        {pins.map((p,idx) => (
          <>
          <Markers p={p}  key={idx}/>
            {
              p._id === currentPlaceId && (
              <Popups p={p}/>
            )}
          </>
        ))}
        {newPlace && (
          <>
          <Markers />
           <AddPin />
          </>
        )}
        {/* dropdown */}
        <Box sx={{ minWidth: 170 }}>
      <FormControl sx={{width:"150px",backgroundColor:"white",position:"absolute",right:"150px",top:"20px",}}>
        <InputLabel id="demo-simple-select-label">Layers</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={layer}
          label="layers"
          onChange={handleChange}
        >
          <MenuItem value="mapbox://styles/sunny170/cldd2kho1000t01p2zvc21xc2">Streets</MenuItem>
          <MenuItem value="mapbox://styles/sunny170/cldd2sy9q001b01nm9ak7cme0">Monochrome</MenuItem>
          <MenuItem value="mapbox://styles/sunny170/cldd2tepb000i01mxot5l0cu1">Outdoors</MenuItem>
          <MenuItem value="mapbox://styles/sunny170/cldd349v7003t01ms516o8wrr">Navigation</MenuItem>
          <MenuItem value="mapbox://styles/sunny170/ckzcpfseb000r15nuiyi5bm56">Satellite</MenuItem>
        </Select>
      </FormControl>
    </Box>
        {/* dropdown */}
        <Button onClick={handleLogout} variant='contained' style={{position:"absolute",right:"20px",top:"20px",backgroundColor:"red"}} >Logout</Button>
      </ReactMapGL>
    </div>
    </>
  )
}

export default Main