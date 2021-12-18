import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, TextField } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
import axiosInstance from "../../services/axiosInstance";
const useStyles = makeStyles({
  contianer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
    padding: "20px",
  },
  child: {
    width: "60%",
    padding: "20px",
  },
});
const Login = (props) => {
  // const navigate = useNavigate();
  const classes = useStyles();
  const [email, setEmail] = useState("hammad@gmail.com");
  const [password, setPassword] = useState("hammad");
  return (
    <div className={classes.contianer}>
      <div className={classes.child}>
        <TextField
          label="email"
          fullWidth
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />
        <hr />{" "}
        <TextField
          label="password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            axiosInstance
              .post("https://usman-recipes.herokuapp.com/api/auth", {
                email,
                password,
              })
              .then((res) => {
                console.log(res.data);
                localStorage.setItem("jwt_access_token", res.data);
                window.location.replace("/ ");
              })
              .catch((e) => {
                console.log(e);
              });
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
