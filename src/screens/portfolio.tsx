import React from "react";
import Preloader from "../components/preloader";
import LeftPart from "../components/leftpart";
import RightPart from "../components/rightpart";
import MoblieMenu from "../components/moblie/moblimenu";

const Portfolio = () => {
  return (
    <div className="arlo_tm_wrapper_all">
      <div id="arlo_tm_popup_blog">
        <div className="container">
          <div className="inner_popup scrollable"> </div>
        </div>
        <span className="close">
          <a href="#"></a>
        </span>
      </div>

      {/* <!-- PRELOADER --> */}
      <Preloader />
      {/* <!-- /PRELOADER --> */}

      {/* <!-- MOBILE MENU --> */}
      <MoblieMenu />
      {/* <!-- /MOBILE MENU --> */}

      {/* <!-- CONTENT --> */}
      <div className="arlo_tm_content">
        {/* <!-- LEFTPART --> */}
        <LeftPart />
        {/* <!-- /LEFTPART --> */}

        {/* <!-- RIGHTPART --> */}
        <RightPart />
        {/* <!-- /RIGHTPART --> */}

        <a className="arlo_tm_totop" href="#"></a>
      </div>
    </div>
  );
};

export default Portfolio;
