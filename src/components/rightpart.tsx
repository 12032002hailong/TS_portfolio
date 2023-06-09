import React from "react";
import HomeCV from "./content/homecv";
import About from "./content/about";
import Skill from "./content/skill";
import Project from "./content/project";
import Contact from "./content/contact";

interface IProps {
  showLeftPart: boolean;
  setShowLeftPart: (value: boolean) => void;
}

const RightPart = (props: IProps) => {
  return (
    <div
      className={
        props.showLeftPart === true
          ? "arlo_tm_rightpart opened"
          : "arlo_tm_rightpart opened"
      }
    >
      <div className="rightpart_inner">
        <HomeCV />

        {/* <!-- ABOUT --> */}
        <About />
        {/* <!-- /ABOUT --> */}

        {/* <!-- SKILLS --> */}
        <Skill />
        {/* <!-- /SKILLS --> */}

        {/* <!-- SERVICES --> */}
        <Project />
        {/* <!-- /SERVICES --> */}

        {/* <!-- CONTACT & FOOTER --> */}
        <Contact />
        {/* <!-- /CONTACT & FOOTER --> */}
      </div>
    </div>
  );
};

export default RightPart;
