import { Grid } from "@material-ui/core";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const NewProducut = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1>Add New Product</h1>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <TextField
          style={{ padding: "10px" }}
          id="standard-basic"
          label="name"
          variant="standard"
          fullWidth
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          style={{ padding: "10px" }}
          id="standard-basic"
          label="price"
          variant="standard"
          fullWidth
          value={price}
          onChange={(e) => {
            setPrice(
              e.target.value
            ); /* Using react state we can change the value of input fields*/
          }}
        />
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={9}>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            console.log("Send API call");
            axios
              .post("https://usman-recipes.herokuapp.com/api/products", {
                name,
                price,
              })
              .then((res) => {
                console.log(res.data);
                navigate("/products");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Add new Product
        </Button>
      </Grid>
    </Grid>
  );
};
export default NewProducut;
