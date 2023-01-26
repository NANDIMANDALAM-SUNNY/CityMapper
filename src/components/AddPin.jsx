import React, { useContext } from 'react'
import { store } from '../App'
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Button, Card, CardActions, CardContent, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';


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
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                <Typography mb={1} fullWidth>Title </Typography>
                <TextField  mb={1}  fullWidth variant='standard'  
                    placeholder="Enter a title"
                    autoFocus
                    onChange={(e) => setTitle(e.target.value)} 
                    />
                  <Typography  mt={2} >Description</Typography>
                  <TextareaAutosize 
                    fullWidth
                    placeholder="Say us something about this place."
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  <FormControl mt={3} fullWidth>
                    <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Rating"
                      onChange={(e) => setStar(e.target.value)}
                    >
                      <MenuItem value={1}>One</MenuItem>
                      <MenuItem value={2}>Two</MenuItem>
                      <MenuItem value={3}>Three</MenuItem>
                      <MenuItem value={4}>Four</MenuItem>
                      <MenuItem value={5}>Five</MenuItem>
                  </Select>
                </FormControl>
                  
                </CardContent>
                <CardActions>
                  <Button onClick={handleSubmit} className="submitButton" size="small">Add Review</Button>
                </CardActions>
              </Card>
                {/* <form onSubmit={handleSubmit}>
                  <button type="submit" className="submitButton">
                    Add Pin
                  </button>
                </form> */}
              </div>
            </Popup>
    </>
  )
}

export default AddPin