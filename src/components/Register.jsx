// import { Cancel, Room } from "@material-ui/icons";

import { Box, TextField } from "@mui/material";
import axios from "axios";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Base_url } from "../config/config";
import "./register.css";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';


const  Register = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  // const usernameRef = useRef();
  // const emailRef = useRef();
  // const passwordRef = useRef();
  const navigate = useNavigate()

const [user,setUser] = useState({
  username:"",
  email:"",
  password:""
})

const handleChange = (e)=>{
  setUser({...user,[e.target.name]:e.target.value})
}

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      await axios.post(`${Base_url}/users/register`, user);
      setError(false);
      setSuccess(true);
      navigate('/login')
    } catch (err) {
      setError(true);
    }
  };
  return (
    <Box className="auth-main">
    <Box className="registerContainer">
      <div className="logo">
      <AddLocationAltIcon className="logoIcon TravelPin" />
        <span className="CityMapper">CityMapper</span>
      </div>
      <form onSubmit={handleSubmit}>
        <TextField value={user.username}  name="username" variant="standard"  placeholder="username"  onChange={(e)=>handleChange(e)} />
        <TextField  value={user.email} name="email"  variant="standard" type="email" placeholder="email" onChange={handleChange} />
        <TextField
        value={user.password} 
          type="password"
          variant="standard"
          name="password"
          placeholder="password"
         onChange={handleChange}
        />
        <button className="registerBtn" type="submit">
          Register
        </button>
        <span>Having account?😊
        <span  >  <Link to='/login' style={{textDecoration:"none"}} >Login Here </Link> </span> 
        </span>
        {success && (
          <span className="success">Successfull. You can login now!</span>
        )}
        {error && <span className="failure">Something went wrong!</span>}
      </form>
    </Box>
    </Box>
  );
}
export default Register