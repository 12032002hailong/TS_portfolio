import React from "react";
import anh1 from "@/assets/img/about/1.jpeg";
import myCV from "@/assets/CV Long Nguyễn Đức Hải - CV IT-TopCV.vn.pdf";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <div className="arlo_tm_section relative" id="about">
      <div className="arlo_tm_about_wrapper_all">
        <div className="container">
          <div className="arlo_tm_title_holder">
            <h3>About Me</h3>
            <span>Về Tác Giả</span>
          </div>
          <div className="arlo_tm_about_wrap">
            <div className="author_wrap">
              <div className="leftbox">
                <div
                  className="about_image_wrap parallax"
                  data-relative-input="true"
                >
                  <div className="image layer" data-depth="0.1">
                    <img src="img/about/550x640.jpg" alt="550x640" />
                    <div className="inner" data-img-url={anh1}></div>
                  </div>
                  <div className="border layer" data-depth="0.2">
                    <img src="img/about/550x640.jpg" alt="550x640" />
                    <div className="inner"></div>
                  </div>
                </div>
              </div>
              <div className="rightbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>
                    Hi there ... I'm a{" "}
                    <TypeAnimation
                      sequence={[
                        "Freelancer", // Types 'One'
                        2000, // Waits 2s
                        "UI/UX Designer", // Deletes 'One' and types 'Two'
                        2000, // Waits 2s
                        "Web Developer" // Types 'Three' without deleting 'Two'
                      ]}
                      wrapper="span"
                      cursor={true}
                      repeat={Infinity}
                      // style={{ fontSize: "2em", display: "inline-block" }}
                    />
                    <span className="arlo_tm_animation_text_word"></span>
                  </h4>
                </div>
                <div className="definition">
                  <p>
                    Xin chào, mình là <strong>Hải Long</strong>. một lập trình
                    viên với đam mê và kinh nghiệm trong lĩnh vực Công nghệ
                    Thông tin (IT). Tôi đã đam mê với lập trình từ khi còn trẻ
                    và đã dành nhiều năm để học và phát triển kỹ năng của mình
                    trong lĩnh vực này. Tôi có kiến thức và kinh nghiệm vững
                    chắc trong ngôn ngữ lập trình như Javascript,. Tôi cũng có
                    kinh nghiệm làm việc với các framework phổ biến như React.
                    Tôi luôn tìm kiếm cơ hội để nâng cao kỹ năng và tiếp tục học
                    hỏi các công nghệ mới nhất trong ngành.
                  </p>
                </div>
                <div className="about_short_contact_wrap">
                  <ul>
                    <li>
                      <span>
                        <label>Ngày sinh:</label> 12.03.2002(Gen Z)
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Giới tính:</label> Nam
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Tốt nghiệp:</label> Đại học Phenikaa
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Tốt nghiệp loạik:</label> Khá
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Chuyên ngành:</label> Kỹ sư Công Nghệ Phần Mềm
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Sở thích:</label> Đá bóng, Code, Xem Phim
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>FaceBook:</label> Nguyễn Đức Hải
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Website:</label>{" "}
                        <a href="#">www.mywebsite.com</a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Mail:</label>{" "}
                        <a href="mailto:example@gmail.com">
                          hailong&#64;gmail.com
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Phone:</label> <a href="#">0123456789</a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="buttons_wrap">
                  <ul>
                    <li>
                      <a href={myCV} download>
                        <span>Download CV</span>
                      </a>
                    </li>
                    <li className="anchor">
                      <a href="#contact">
                        <span>Send Message</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
