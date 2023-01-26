import React, { useContext } from 'react'
import { store } from '../App'
import ReactMapGL, { Marker, Popup } from "react-map-gl";


const AddPin = () => {

const {pins, setPins,
    currentPlaceId, setCurrentPlaceId,
    newPlace, setNewPlace,
    title, setTitle,
    desc, setDesc,
    star, setStar,
    viewport, setViewport,
    showRegister, setShowRegister,
    showLogin, setShowLogin,
    handleMarkerClick,
    handleSubmit

} = useContext(store)



  return (
    
    <>
        <Popup
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
            </Popup>
    </>
  )
}

export default AddPin