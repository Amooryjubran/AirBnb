import React from "react";
import "./SearchInformation.css";
import StarIcon from "@material-ui/icons/Star";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import HotelIcon from "@material-ui/icons/Hotel";
function SearchInformation({
  name,
  stars,
  reviews,
  location,
  degree,
  food,
  img,
  host,
  guest,
  bedroom,
  bed,
  bath,
}) {
  return (
    <div className="SearchInformation">
      <h1>{name}</h1>
      <div className="SearchInformation__location">
        <div className="SearchInformation__Left">
          <StarIcon />
          <h5>{stars}</h5>
          <h6>({reviews})</h6>
          <h5>{location}</h5>
        </div>
        <div className="SearchInformation__right">
          <ShareIcon />
          <h5>Share</h5>
          <FavoriteBorderIcon />
          <h5>Save</h5>
        </div>
      </div>

      <div className="SearchInformation__images">
        <div className="bg1">
          <h2>{degree} &deg;</h2>
          <p>Temperature</p>
        </div>
        <div className="bg1">
          <h2>
            <FavoriteBorderIcon />
          </h2>
          <p>{food}</p>
        </div>
        <div className="bg2">
          <h2>
            98 <span>bpm</span>
          </h2>
          <p>Heart Rate</p>
        </div>

        <div className="bg2">
          <h2>
            680 <span>kcal</span>
          </h2>
          <p>AVG Consumption</p>
        </div>
        <div className="bg2">
          <h2>
            <FavoriteBorderIcon />
          </h2>
          <p>Workouts</p>
        </div>
        <div className="bg2">
          <h2>
            85 <span>%</span>
          </h2>
          <p>Body Hydration</p>
        </div>
      </div>

      <div class="Search__info">
        <div className="left">
          <div class="Search__info__left">
            <div className="Search__info__container">
              <h1>Entire apartment hosted by {host}</h1>
              <h3>
                {guest} guests · {bedroom} bedroom · {bed} bed · {bath} bath
              </h3>
            </div>
            <img src={img} alt="" />
          </div>
          <hr />

          <div className="home">
            <div className="entire_home">
              <FavoriteBorderIcon className="logos" />

              <div className="entie_home_text">
                <h3>Entire home</h3>
                <p>You’ll have the apartment to yourself.</p>
              </div>
            </div>
          </div>

          <div className="home">
            <div className="entire_home">
              <FavoriteBorderIcon className="logos" />

              <div className="entie_home_text">
                <h3>Entire home</h3>
                <p>You’ll have the apartment to yourself.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="two">
          <div className="sleeping">
            <h1>Sleeping Arrangements</h1>
            <div className="sleeping__container">
              <div className="sleeping__first">
                <HotelIcon />
                <h1 className="sleeping__bedroom">Bedroom 1</h1>
                <p className="sleeping__bed">1 sofa bed</p>
              </div>

              <div className="sleeping__left">
                <HotelIcon />
                <h1 className="sleeping__bedroom">Bedroom 1</h1>
                <p className="sleeping__bed">1 sofa bed</p>
              </div>
            </div>
          </div>
        </div>
        <div class="three">three</div>
      </div>
    </div>
  );
}

export default SearchInformation;
