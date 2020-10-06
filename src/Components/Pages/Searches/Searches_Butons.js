import React from "react";
import { Button } from "@material-ui/core";

function Searches_Butons() {
  return (
    <div className="searchPage__info">
      <p>62 stays . 26 auguest to 30 august . 2 guest</p>
      <h1>Stays nearby</h1>

      <Button variant="outlined">Cancellation Flexibility</Button>

      <Button variant="outlined">Type of place</Button>
      <Button variant="outlined">Price</Button>
      <Button variant="outlined">Rooms and beds</Button>
      <Button variant="outlined">More filters</Button>
    </div>
  );
}

export default Searches_Butons;
