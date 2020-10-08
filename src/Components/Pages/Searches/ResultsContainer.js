import React from "react";
import { ResultsList } from "../../Data/Data";
import { Route } from "react-router-dom";
import Result from "./Result";
import Results from "./Results";
import "./style.css";

const ResultsContainer = (props) => {
  let resultsUrl = ResultsList.map((result) => {
    return (
      <Route
        path={`/Results/${result.url}`}
        render={() => (
          <Result
            image={result.profile_img}
            name={result.name}
            details={result.description}
            star={result.star}
            reviews={result.reviews}
            degree={result.degree}
            food={result.degree}
            location={result.location}
            city={result.city}
            host={result.host}
            host__img={result.host__img}
            guest={result.guest}
            bedroom={result.bedroom}
            bed={result.bed}
            bathroom={result.bathroom}
            bath={result.bath}
            wind={result.wind}
            reviewed={result.reviewed}
            imageUrl={result.imageUrl}
            imageUrl2={result.imageUrl2}
            imageUrl3={result.imageUrl3}
            imageUrl4={result.imageUrl4}
            imageUrl5={result.imageUrl5}
            imageUrl6={result.imageUrl6}
          />
        )}
      />
    );
  });
  return (
    <>
      <Route exact path="/Results" render={() => <Results />} />
      {resultsUrl}
    </>
  );
};

export default ResultsContainer;
