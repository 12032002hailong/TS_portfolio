import React, { useState } from "react";
import { Button, Modal } from "antd";
import { IoLogoReact } from "react-icons/io5";
import { BsArrowRight, BsInstagram, BsTwitter } from "react-icons/bs";
import { DiNodejsSmall } from "react-icons/di";
import { AiFillFacebook } from "react-icons/ai";

interface IProject {
  img: JSX.Element;
  title: string;
  shortDescription: string;
  detail: {
    description: string;
    frontend: string;
    backend: string;
    member: number;
    role: string;
    demo: string;
    github: string;
  };
}

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<IProject | null>(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const dataProject: IProject[] = [
    {
      img: <IoLogoReact size={50} color="#2bebfd" />,
      title: "Website Thương mại điện tử Clone Tiki",
      shortDescription:
        "Wrbsite thương mại điện tử hỗ trợ mua và quản lý sản phẩm",
      detail: {
        description: "Xây dựng website thương mại điện tử clone Tiki", //miêu tả dự án làm gì
        frontend: "React (TypeScript), Redux Toolkit, Ant Design", //công nghệ sử dụng
        backend: "Node.JS(Express), MongoDB", //công nghệ sử dụng
        member: 1, //bao nhiêu member
        role: "Frontend", //vai trò trong dự án
        demo: "", //link video, link deploy
        github: "" //link github
      }
    },
    {
      img: <DiNodejsSmall size={50} color="#4096ff" />,
      title: "Website đặt lịch khám bệnh",
      shortDescription:
        " Website đặt lịch khám bệnh dành cho bệnh viện và các phòng khám",
      detail: {
        description:
          "Xây dựng website đặt lịch khám bệnh, clone website bookingcare.vn", //miêu tả dự án làm gì
        frontend: "React (TypeScript), Redux Toolkit, Ant Design", //công nghệ sử dụng
        backend: "Node.JS(Express), MongoDB", //công nghệ sử dụng
        member: 1, //bao nhiêu member
        role: "Frontend", //vai trò trong dự án
        demo: "", //link video, link deploy
        github: "" //link github
      }
    },
    {
      img: <AiFillFacebook size={50} color="#4096ff" />,
      title: "Website Facebook Clone",
      shortDescription:
        "Website mạng xã hội giúp kết nối mọi người có cùng sở thích",
      detail: {
        description:
          "Xây dựng website đặt lịch khám bệnh, clone website bookingcare.vn", //miêu tả dự án làm gì
        frontend: "React (TypeScript), Redux Toolkit, Ant Design", //công nghệ sử dụng
        backend: "Node.JS(Express), MongoDB", //công nghệ sử dụng
        member: 1, //bao nhiêu member
        role: "Frontend", //vai trò trong dự án
        demo: "", //link video, link deploy
        github: "" //link github
      }
    }
  ];

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setDataDetail(null);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title={
          dataDetail && dataDetail.title ? `Dự án ${dataDetail.title}` : ""
        }
        open={isModalOpen}
        onOk={() => handleCloseModal()}
        footer={null}
        maskClosable={false}
        onCancel={() => handleCloseModal()}
      >
        <ul>
          <li> Xây dựng website thương mại điện tử clone Tiki</li>
          <li> React (TypeScript), Redux Toolkit, Ant Design</li>
          <li> backend: "Node.JS(Express), MongoDB"</li>
          <li>Số lượng thành viên dựa án: 1</li>
          <li>Vai trò: Developer</li>{" "}
        </ul>
      </Modal>

      <div className="arlo_tm_section" id="project">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Amazing Project</h3>
              <span>Các dự án đã hoàn thiện</span>
            </div>
            <div className="list_wrap">
              <ul>
                {dataProject.map((item, index) => {
                  return (
                    <li>
                      <div
                        className="inner"
                        title="Xem Chi Tiết"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setDataDetail(item);
                          setIsModalOpen(true);
                        }}
                      >
                        <div className="icon">{item.img}</div>
                        <div className="title_service">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="text">
                          <p>{item.shortDescription}</p>
                        </div>
                        <div
                          className="view_detail"
                          style={{ padding: "5px 0" }}
                        >
                          <span style={{ cursor: "pointer" }}>
                            <BsArrowRight />
                            &nbsp; Xem Chi Tiết
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
