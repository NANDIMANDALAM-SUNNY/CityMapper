// import { Cancel, Room } from "@material-ui/icons";

import { TextField, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { store } from "../App";
import { Base_url } from "../config/config";
import "./login.css";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';


const  Login = () =>{
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
  handleAddClick,
  myStorage
} =useContext(store)

const [user,setUser] = useState({
  username:"",
  email:"",
  password:""
})

  const [error, setError] = useState(false);
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate()
  
const handleChange = (e)=>{
  setUser({...user,[e.target.name]:e.target.value})
}
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post(`${Base_url}/users/login`, user);
      setCurrentUsername(res.data.username);
      await myStorage.setItem('user', res.data.username);
      setShowLogin(false)
      navigate('/')
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>

    <div className="auth-main">

   
    <div className="loginContainer">
      <div className="logo">
        <AddLocationAltIcon className="logoIcon TravelPin" />
        <span className="CityMapper">CityMapper</span>
      </div>
      <form onSubmit={handleSubmit}>
      <TextField value={user.username}  name="username" variant="standard"  placeholder="username"  onChange={(e)=>handleChange(e)} />
      <Typography mt={2}>Username : demo</Typography>
      <TextField value={user.password}  name="password" variant="standard"  placeholder="password"  onChange={(e)=>handleChange(e)} />
      <Typography mt={2} >password : demo</Typography>

        <button className="loginBtn" type="submit">
          Login
        </button>
        <span>Not having account?😢
        <span  >  <Link to='/register' style={{textDecoration:"none"}} >Click Here </Link> </span> 
        </span>
        {error && <span className="failure">Something went wrong!</span>}
      </form>
     
    </div>
    </div>

    </>
  );
}
export default Login
