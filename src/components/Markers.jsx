import LocationOnIcon from '@mui/icons-material/LocationOn';
import React, { useContext } from 'react'
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { store } from '../App';

const Markers = ({p}) => {
const {viewport,currentUsername,setViewport,setCurrentPlaceId,newPlace, setNewPlace,} = useContext(store)

const handleMarkerClick = (id, lat, long) => {
  setCurrentPlaceId(id);
  setViewport({ ...viewport, latitude: lat, longitude: long });
};

  return (
    <>{
      p &&  p ? <>
        <Marker
                      latitude={p.lat}
                      longitude={p.long}
                      offsetLeft={-3.5 * viewport.zoom}
                      offsetTop={-7 * viewport.zoom}
                    >
                      <LocationOnIcon
                        style={{
                          fontSize: 7 * viewport.zoom,
                          color:currentUsername === p.username ? "tomato" : "slateblue",
                          cursor: "pointer",
                        }}
                        onClick={() => handleMarkerClick(p._id, p.lat, p.long)}
                      />
                    </Marker>
      </>:<> <Marker
              latitude={newPlace.lat}
              longitude={newPlace.long}
              offsetLeft={-3.5 * viewport.zoom}
              offsetTop={-7 * viewport.zoom}
            >
              <LocationOnIcon
                style={{
                  fontSize: 7 * viewport.zoom,
                  color: "white",
                  cursor: "pointer",
                }}
              />
            </Marker>
            </>
    }
         
    </>
  )
}

export default Markers