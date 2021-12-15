import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Button, Grid } from "@mui/material";
const SingleProduct = (props) => {
  const navigate = useNavigate();

  const { product, onDelete } = props;
  // console.log(props);

  return (
    <Grid item xs={3}>
      <h2>{product.name}</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          console.log("move to update");
          navigate("/product/update/" + product._id);
        }}
      >
        Edit
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          console.log("Send API call");
          axios
            .delete(
              "https://usman-recipes.herokuapp.com/api/products/" + product._id
            )
            .then((res) => {
              console.log(res.data);
              onDelete();
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        Delete
      </Button>
      <p>{product.price}</p>
      <hr />
    </Grid>
  );
};

export default SingleProduct;
