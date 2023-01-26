import React, { useContext } from 'react'
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { store } from '../App';
// import { Room, Star, StarBorder } from "@material-ui/icons";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { format } from "timeago.js";
import StarBorderIcon from '@mui/icons-material/StarBorder';


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
                anchor="left"
              >
                <div className="card">
                  <label>Place</label>
                  <h4 className="place">{p.title}</h4>
                  <label>Review</label>
                  <p className="desc">{p.desc}</p>
                  <label>Rating</label>
                  <div className="stars">
                    {Array(p.rating).fill(<StarBorderIcon className="star" />)}
                  </div>
                  <label>Information</label>
                  <span className="username">
                    Created by <b>{p.username}</b>
                  </span>
                  <span className="date">{format(p.createdAt)}</span>
                </div>
            </Popup>
    </>
  )
}

export default Popups