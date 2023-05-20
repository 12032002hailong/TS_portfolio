import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

const Skill = () => {
  return (
    <div className="arlo_tm_section" id="skills">
      <div className="arlo_tm_skills_wrap">
        <div className="container">
          <div className="inner_wrap">
            <div className="leftbox">
              <div className="arlo_tm_mini_title_holder">
                <h4>Kỹ năng Frontend</h4>
              </div>
              <p>Cắt ghép template Website Responsive</p>
              <p>FrameWork/Library: Bootstrap, JQuery,Antd, ReactJs</p>
              <p>Ngôn ngữ sử dụng: Javascript, Typescript</p>
              <p>Đọc hiểu Docs ứng dụng vào làm dự án</p>
            </div>
            <div className="rightbox">
              <div className="progress_bar_wrap_total">
                <div
                  className="arlo_tm_progress_wrap"
                  data-size="small"
                  data-round="c"
                  data-strip="off"
                >
                  <div
                    className="arlo_tm_progress"
                    data-value="95"
                    data-color="#000"
                  >
                    <span>
                      <span className="label">HTML/CSS/JavaScript </span>
                      <span className="number">95%</span>
                    </span>
                    <ProgressBar
                      completed={95}
                      bgColor="#333"
                      height="8px"
                      isLabelVisible={false}
                    />
                  </div>
                  <div
                    className="arlo_tm_progress"
                    data-value="85"
                    data-color="#000"
                  >
                    <span>
                      <span className="label">React.Js(TypeScript)</span>
                      <span className="number">85%</span>
                    </span>
                    <ProgressBar
                      completed={85}
                      bgColor="#333"
                      height="8px"
                      isLabelVisible={false}
                    />
                  </div>
                  <div
                    className="arlo_tm_progress"
                    data-value="75"
                    data-color="#000"
                  >
                    <span>
                      <span className="label">Design UI/UX</span>
                      <span className="number">75%</span>
                    </span>
                    <ProgressBar
                      completed={75}
                      bgColor="#333"
                      height="8px"
                      isLabelVisible={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="arlo_tm_skills_wrap">
        <div className="container">
          <div className="inner_wrap">
            <div className="leftbox">
              <div className="arlo_tm_mini_title_holder">
                <h4>Kỹ năng Backend</h4>
              </div>
              <p>Ngôn ngữ lập trình :Javs, Javascript, C#</p>
              <p>Viết Resful Apis</p>
              <p>FrameWork: Express, NestJs,Spring Boot</p>
              <p>Database: Postgres, MongoDB</p>
            </div>
            <div className="rightbox">
              <div className="progress_bar_wrap_total">
                <div
                  className="arlo_tm_progress_wrap"
                  data-size="small"
                  data-round="c"
                  data-strip="off"
                >
                  <div
                    className="arlo_tm_progress"
                    data-value="95"
                    data-color="#000"
                  >
                    <span>
                      <span className="label">Nest.Js</span>
                      <span className="number">95%</span>
                    </span>
                    <ProgressBar
                      completed={95}
                      bgColor="#333"
                      height="8px"
                      isLabelVisible={false}
                    />
                  </div>
                  <div
                    className="arlo_tm_progress"
                    data-value="85"
                    data-color="#000"
                  >
                    <span>
                      <span className="label">JavaSpring</span>
                      <span className="number">85%</span>
                    </span>
                    <ProgressBar
                      completed={85}
                      bgColor="#333"
                      height="8px"
                      isLabelVisible={false}
                    />
                  </div>
                  <div
                    className="arlo_tm_progress"
                    data-value="75"
                    data-color="#000"
                  >
                    <span>
                      <span className="label">Database Postgres/MongoDB</span>
                      <span className="number">75%</span>
                    </span>
                    <ProgressBar
                      completed={75}
                      bgColor="#333"
                      height="8px"
                      isLabelVisible={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
