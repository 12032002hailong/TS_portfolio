import React, { useState } from "react";
import desktopLogo from "@/assets/img/logo/desktop-logo.png";

interface IProps {
  showLeftPart: boolean;
  setShowLeftPart: (value: boolean) => void;
}

const LeftPart = (props: IProps) => {
  const [activeTab, setActiveTab] = useState<string>("home");
  const handleClickTab = (
    tab: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    setActiveTab(tab);
    event.preventDefault();
    const section = document.querySelector(`#${tab}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className={
        props.showLeftPart === true
          ? "arlo_tm_leftpart_wrap opened"
          : "arlo_tm_leftpart_wrap"
      }
    >
      <div className="leftpart_inner">
        <div className="logo_wrap">
          <a href="#">
            <img src={desktopLogo} alt="desktop-logo" />
          </a>
        </div>
        <div className="menu_list_wrap">
          <ul className="anchor_nav">
            <li>
              <a
                href="#home"
                className={activeTab === "home" ? "active" : ""}
                onClick={(
                  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                ) => handleClickTab("home", event)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeTab === "about" ? "active" : ""}
                onClick={(
                  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                ) => handleClickTab("about", event)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={activeTab === "skills" ? "active" : ""}
                onClick={(
                  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                ) => handleClickTab("skills", event)}
              >
                Skill
              </a>
            </li>
            <li>
              <a
                href="#project"
                className={activeTab === "project" ? "active" : ""}
                onClick={(
                  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                ) => handleClickTab("project", event)}
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeTab === "contact" ? "active" : ""}
                onClick={(
                  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                ) => handleClickTab("contact", event)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="leftpart_bottom">
          <div className="social_wrap">
            <ul>
              <li>
                <a href="#">
                  <i className="xcon-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="xcon-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="xcon-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="xcon-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="xcon-behance"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a
          className={
            props.showLeftPart ? "arlo_tm_resize opened" : "arlo_tm_resize"
          }
          href="#"
          onClick={() => props.setShowLeftPart(!props.showLeftPart)}
        >
          <i
            className={
              props.showLeftPart ? "xcon-angle-left opened" : "xcon-angle-left"
            }
          ></i>
        </a>
      </div>
    </div>
  );
};

export default LeftPart;
