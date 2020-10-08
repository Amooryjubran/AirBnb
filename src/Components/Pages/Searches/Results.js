import React from "react";
import { Button } from "@material-ui/core";

import { Link } from "react-router-dom";
import { ResultsList } from "../../Data/Data";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

const Results = (props) => {
  let results = ResultsList.map((result) => {
    return (
      <>
        <div className="actor-container">
          <div className="searchResult">
            <Link to={`/Results/${result.url}`}>
              <img className="search__images" src={result.img} alt="" />
            </Link>
            <FavoriteBorderIcon className="searchResult__heart" />
            <div className="searchResult__info">
              <div className="searchResult__infoTop">
                <p>{result.location}</p>
                <h3>{result.title}</h3>
                <p>____</p>
                <p>{result.description}</p>
              </div>
              <div className="searchResult__infoBottom">
                <div className="searchResult__stars">
                  <StarIcon className="searchResult__star" />
                  <p>
                    <strong>{result.star}</strong>
                  </p>
                </div>
                <div className="searchResults__price">
                  <h2 className="h2">{result.price}</h2>
                  <p>{result.total}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <div className="main-content">
      <div className="searchPage__info">
        <p>62 stays . 26 auguest to 30 august . 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <h2 className="h2">{props.title}</h2>
      <div className="container">{results}</div>
    </div>
  );
};

export default Results;
