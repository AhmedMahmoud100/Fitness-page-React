import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import Heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";
export default function Hero() {
  return (
    <div className="hero">
      <section className="left-s">
        <Header />
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        <section className="figures">
          <figure>
            <span>+ 140</span>
            <span>EXPERT COACHES</span>
          </figure>
          <figure>
            <span>+ 978</span>
            <span>MEMBERS JOINED</span>
          </figure>
          <figure>
            <span>+ 50</span>
            <span>FITNESS PROGRAMS</span>
          </figure>
        </section>

        <section className="hero-buttons">
          <button>Get Started</button>
          <button>Learn More</button>
        </section>
      </section>

      <section className="right-s">
        <button>Join Now</button>
        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        <div>
          <img src={hero_image} alt="" className="hero-image"></img>
          <img src={hero_image_back} alt="" className="hero-image-back" />
        </div>

        <section className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </section>
      </section>
    </div>
  );
}
