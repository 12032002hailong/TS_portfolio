import React, { useState } from "react";
import Preloader from "../components/preloader";
import LeftPart from "../components/leftpart";
import RightPart from "../components/rightpart";
import MoblieMenu from "../components/moblie/moblimenu";
import { FloatButton } from "antd";
const Portfolio = () => {
  const [showLeftPart, setShowLeftPart] = useState<boolean>(false);
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
        <LeftPart
          showLeftPart={showLeftPart}
          setShowLeftPart={setShowLeftPart}
        />
        {/* <!-- /LEFTPART --> */}

        {/* <!-- RIGHTPART --> */}
        <RightPart
          showLeftPart={showLeftPart}
          setShowLeftPart={setShowLeftPart}
        />
        {/* <!-- /RIGHTPART --> */}

        <FloatButton.BackTop tooltip={<div>Scroll to Top</div>} />
      </div>
    </div>
  );
};

export default Portfolio;
