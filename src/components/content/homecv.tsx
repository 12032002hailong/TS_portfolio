import React from "react";
import { TypeAnimation } from "react-type-animation";

const HomeCV = () => {
  return (
    <div className="arlo_tm_section" id="home">
      <div className="arlo_tm_hero_header_wrap">
        <div className="arlo_tm_universal_box_wrap">
          <div className="bg_wrap">
            <div className="overlay_image hero jarallax" data-speed="0.1" />
            <div className="overlay_color hero" />
          </div>
          <div className="content hero">
            <div className="inner_content">
              <div className="image_wrap">
                <img src="img/hero/song ngư.jpg" alt="hero" />
              </div>
              <div className="name_holder">
                <h3>
                  <span>Hải Long</span>
                </h3>
              </div>
              <div className="text_typing">
                <p>
                  I'm a
                  <span className="arlo_tm_animation_text_word" />
                  <TypeAnimation
                    sequence={[
                      " Freelancer", // Types 'One'
                      2000, // Waits 1s
                      " UI/UX Designer", // Deletes 'One' and types 'Two'
                      2000, // Waits 2s
                      " Web Developer", // Types 'Three' without deleting 'Two'
                      2000,
                      () => {
                        console.log("Sequence completed"); // Place optional callbacks anywhere in the array
                      },
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    // style={{ fontSize: "2em", display: "inline-block" }}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="arlo_tm_arrow_wrap bounce anchor">
            <a href="#about">
              <i className="xcon-angle-double-down" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCV;