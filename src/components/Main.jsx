import React, { useContext, useEffect } from 'react'
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


    const handleLogout = () => {
      setCurrentUsername(null);
      myStorage.removeItem("user");
      navigate('/login')
    };

  useEffect(()=>{
   

  },[])
  if(currentUsername == null){
    navigate('/login')
  } 

  return (
    <>
    <div style={{ height: "100vh", width: "100%" }}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1Ijoic3VubnkxNzAiLCJhIjoiY2wzd3U0d3Y4MDJjczNqamprcnI5dXlsZyJ9.nbchKldiZewNgR6Ln9HQ5w"
        width="100%"
        height="100%"
        transitionDuration="200"
        mapStyle="mapbox://styles/sunny170/ckzcpfseb000r15nuiyi5bm56"
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
        <Button onClick={handleLogout} variant='contained' style={{position:"absolute",right:"20px",top:"20px",backgroundColor:"red"}} >Logout</Button>
      </ReactMapGL>
    </div>
    </>
  )
}

export default Main