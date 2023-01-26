import "./App.css";
import { createContext, useEffect, useState } from "react";
// import { Room, Star, StarBorder } from "@material-ui/icons";
import axios from "axios";
import { format } from "timeago.js";
import Register from "./components/Register";
import Login from "./components/Login";
import  {NavigationControl} from 'react-map-gl';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Markers from "./components/Markers";
import Popups from "./components/Popups";
import AddPin from "./components/AddPin";
import { Base_url } from "./config/config";
import Main from "./components/Main";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


export const store = createContext()

function App() {
  const myStorage = window.localStorage;
  const [currentUsername, setCurrentUsername] = useState(myStorage.getItem("user"));
  const [pins, setPins] = useState([]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [star, setStar] = useState(0);
  const [viewport, setViewport] = useState({
    latitude: 13.121201286239835,
    longitude: 80.29096733477773,
    zoom: 18,
  });
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleMarkerClick = (id, lat, long) => {
    setCurrentPlaceId(id);
    setViewport({ ...viewport, latitude: lat, longitude: long });
  };

  const handleAddClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    setNewPlace({
      lat: latitude,
      long: longitude,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPin = {
      username: currentUsername,
      title,
      desc,
      rating: star,
      lat: newPlace.lat,
      long: newPlace.long,
    };

    try {
      const res = await axios.post(`${Base_url}/pins`, newPin);
      setPins([...pins, res.data]);
      setNewPlace(null);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getPins = async () => {
      try {
        const allPins = await axios.get(`${Base_url}/pins`);
        setPins(allPins.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);

  const handleLogout = () => {
    setCurrentUsername(null);
    myStorage.removeItem("user");
  };







  return (
    <>

    
    <store.Provider  value={{
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
      handleSubmit,
      handleAddClick,myStorage
    }} >
    <Router>
      <Routes>
        <Route  exact path="/" element={ <Main />} />
        <Route  exact path="/login" element={ <Login />} />
        <Route  exact path="/register" element={ <Register />} />
      </Routes>
    </Router>

    </store.Provider>
    </>
  );
}

export default App;
