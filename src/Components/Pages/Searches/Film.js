import React, { useState } from "react";
import { Link } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import HotelIcon from "@material-ui/icons/Hotel";
import EventIcon from "@material-ui/icons/Event";
import SingleBedIcon from "@material-ui/icons/SingleBed";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import Brightness5Icon from "@material-ui/icons/Brightness5";

export const Film = (props) => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <div>
        <Link className="back" to="/Results">
          Back
        </Link>
      </div>

      <div className="SearchInformation">
        <h1>{props.name}</h1>
        <div className="SearchInformation__location">
          <div className="SearchInformation__Left">
            <StarIcon className="emoji" />
            <h5>{props.star}</h5>
            <h6>({props.reviews})</h6>
            <h5>{props.location}</h5>
          </div>
          <div className="SearchInformation__right">
            <ShareIcon className="emoji" />
            <h5>Share</h5>
            <FavoriteBorderIcon className="emoji" />
            <h5>Save</h5>
          </div>
        </div>

        <div className="SearchInformation__images">
          <div style={{ backgroundImage: `url(${props.imageUrl})` }}>
            <h2>{props.degree} &deg;</h2>
            <p>Temperature</p>
          </div>
          <div style={{ backgroundImage: `url(${props.imageUrl2})` }}>
            <h2>
              <FastfoodIcon className="emoji" />
            </h2>
            <p>{props.food}</p>
          </div>
          <div style={{ backgroundImage: `url(${props.imageUrl3})` }}>
            <h2>
              {props.wind} <span>mph</span>
            </h2>
            <p>Wind</p>
          </div>

          <div style={{ backgroundImage: `url(${props.imageUrl4})` }}>
            <h2>Sunshine</h2>
            <p>
              <Brightness5Icon className="emoji" />
            </p>
          </div>
          <div style={{ backgroundImage: `url(${props.imageUrl5})` }}>
            <h2>
              <FitnessCenterIcon className="emoji" />
            </h2>
            <p>Workouts</p>
          </div>
          <div style={{ backgroundImage: `url(${props.imageUrl6})` }}>
            <h2>
              {props.reviewed} <span>%</span>
            </h2>
            <p>Reviewed</p>
          </div>
        </div>

        <div class="Search__info">
          <div className="left">
            <div class="Search__info__left">
              <div className="Search__info__container">
                <h1>Entire apartment hosted by {props.host}</h1>
                <h3>
                  {props.guest} guests · {props.bedroom} bedroom · {props.bed}{" "}
                  bed · {props.bath} bath
                </h3>
              </div>
              <img src={props.host__img} alt="" />
            </div>
            <hr className="search__hr" />

            <div className="home">
              <div className="entire_home">
                <FavoriteBorderIcon className="emoji" />

                <div className="entie_home_text">
                  <h3>Entire home</h3>
                  <p>You’ll have the apartment to yourself.</p>
                </div>
              </div>
            </div>

            <div className="home">
              <div className="entire_home">
                <EventIcon className="emoji" />

                <div className="entie_home_text">
                  <h3>Cancellation policy</h3>
                  <p>
                    Add your trip dates to get the cancellation details for this
                    stay.
                  </p>
                </div>
              </div>
            </div>
            <hr className="home__hr" />

            <div className="covid__19">
              <p>
                We invite you to relax and recharge with this unique glamping
                experience.
              </p>
              <p>
                <strong>*NEW COVID enhanced cleaning protocol*</strong>
              </p>
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="covid__19__contct"
              >
                Contact Host
              </button>
              <hr className="home__hr" />
            </div>
          </div>

          <div class="two">
            <div className="sleeping">
              <h1>Sleeping Arrangements</h1>
              <div className="sleeping__container">
                <div className="sleeping__first">
                  <HotelIcon className="emoji" />
                  <h1 className="sleeping__bedroom">Bedroom 1</h1>
                  <p className="sleeping__bed">1 sofa bed</p>
                </div>

                <div className="sleeping__left">
                  <SingleBedIcon className="emoji" />
                  <h1 className="sleeping__bedroom">Common spaces</h1>
                  <p className="sleeping__bed">1 floor mattress</p>
                </div>
              </div>
            </div>
          </div>
          {showSearch && (
            <div class="three">
              <div className="three__container">
                <h4>
                  Connect with <span>{props.host}</span> 👋🏻 !
                </h4>
                <img src={props.host__img} alt="" />
                <form className="contact">
                  <input type="text" placeholder="Your Name" />
                  <input type="text" placeholder="Your Email Address" />
                  <input type="text" placeholder="Your Phone Number" />
                  <input type="text" placeholder="Type your message here...." />
                </form>
                <button className="contact__btn">Send</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Film;
