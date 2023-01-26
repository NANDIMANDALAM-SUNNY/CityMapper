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
      handleSubmit,handleAddClick
    
    } = useContext(store)


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
            {/* <Marker
              latitude={p.lat}
              longitude={p.long}
              offsetLeft={-3.5 * viewport.zoom}
              offsetTop={-7 * viewport.zoom}
            >
              <Room
                style={{
                  fontSize: 7 * viewport.zoom,
                  color:
                    currentUsername === p.username ? "tomato" : "slateblue",
                  cursor: "pointer",
                }}
                onClick={() => handleMarkerClick(p._id, p.lat, p.long)}
              />
            </Marker> */}
            {p._id === currentPlaceId && (
              <Popups p={p}/>
              
            )}
          </>
        ))}
        {newPlace && (
          <>
          <Markers />
           <AddPin />
            {/* <Popup
              latitude={newPlace.lat}
              longitude={newPlace.long}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setNewPlace(null)}
              anchor="left"
            >
              <div>
                <form onSubmit={handleSubmit}>
                  <label>Title</label>
                  <input
                    placeholder="Enter a title"
                    autoFocus
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label>Description</label>
                  <textarea
                    placeholder="Say us something about this place."
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  <label>Rating</label>
                  <select onChange={(e) => setStar(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <button type="submit" className="submitButton">
                    Add Pin
                  </button>
                </form>
              </div>
            </Popup> */}
          </>
        )}
        {/* {currentUsername ? (
          <button className="button logout" onClick={handleLogout}>
            Log out
          </button>
        ) : (
          <div className="buttons">
            <button className="button login mainbutton" data-hover="Click to login" onClick={() => setShowLogin(true)}>
              <div>Login</div>
            </button>
            <button
            data-hover="Click to register"
              className="button register main registerbutton"
              onClick={() => setShowRegister(true)}
            ><div>Register</div>
              
            </button>
          </div>
        )}
        {showRegister && <Register setShowRegister={setShowRegister} />}
        {showLogin && (
          <Login
            setShowLogin={setShowLogin}
            setCurrentUsername={setCurrentUsername}
            myStorage={myStorage}
          />
        )} */}
      </ReactMapGL>
    </div>
    </>
  )
}

export default Main