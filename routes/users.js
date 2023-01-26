const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const { Register, Login } = require("../controllers/users");

//REGISTER
router.post("/register",Register)
router.post("/login",Login)
// router.post("/register", async (req, res) => {
  // try {
  //   //generate new password
  //   const salt = await bcrypt.genSalt(10);
  //   const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //   //create new user
  //   const newUser =await new User({
  //     username: req.body.username,
  //     email: req.body.email,
  //     password: hashedPassword,
  //   });

  //   //save user and respond
  //   const user = await newUser.save();
  //   res.status(200).json(user._id);
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).json(err);
  // }
// });

//LOGIN
// router.post("/login", async (req, res) => {
  // try {
  //   let user = await User.findOne({username:req.body.username})
  //   if(user.email !== null){
  //         const validPassword = await bcrypt.compare(req.body.password,user.password)
  //         if(!validPassword){
  //           res.status(401).json("Authentication Failed")
  //         }
  //         else{
  //           res.status(200).json({ _id: user._id, username: user.username });
  //         }
  //   }
  //   else{
  //     res.send(401).json("Authentication Failed")
  //   }
  // } catch (error) {
  //   console.log(error)
  //   res.status(500).json("Something Went Wrong");
  // }
//   try {
//     //find user
//     const user = await User.findOne({ username: req.body.username });
//     if(!user){
//       res.status(400).json("Wrong username or password");
//     }
// else{
  

//     //validate password
//     const validPassword = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );
//     if(!validPassword){

//       res.status(400).json("Wrong username or password");
//     }
// else{

//   res.status(200).json({ _id: user._id, username: user.username });
// }
//     //send response
//   }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
