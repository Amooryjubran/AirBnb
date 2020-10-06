import React from "react";
import { FilmsList } from "../../Data/Data";
import { Route } from "react-router-dom";
import Film from "./Film";
import Films from "./Films";
import "./style.css";

const FilmsContainer = (props) => {
  let filmsUrl = FilmsList.map((film) => {
    return (
      <Route
        path={`/Results/${film.url}`}
        render={() => (
          <Film
            image={film.profile_img}
            name={film.name}
            details={film.description}
            star={film.star}
            reviews={film.reviews}
            degree={film.degree}
            food={film.degree}
            location={film.location}
            city={film.city}
            host={film.host}
            host__img={film.host__img}
            guest={film.guest}
            bedroom={film.bedroom}
            bed={film.bed}
            bathroom={film.bathroom}
            bath={film.bath}
            wind={film.wind}
            reviewed={film.reviewed}
            imageUrl={film.imageUrl}
            imageUrl2={film.imageUrl2}
            imageUrl3={film.imageUrl3}
            imageUrl4={film.imageUrl4}
            imageUrl5={film.imageUrl5}
            imageUrl6={film.imageUrl6}
          />
        )}
      />
    );
  });
  return (
    <>
      <Route exact path="/Results" render={() => <Films />} />
      {filmsUrl}
    </>
  );
};

export default FilmsContainer;
