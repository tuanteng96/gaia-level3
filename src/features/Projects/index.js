import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../helpers/AssetsHelpers";

function Projects(props) {
  return (
    <>
      <div className="container container-resize">
        <div className="braum">
          <ul>
            <li>
              <Link to="/">II. Trải nghiệm học môn học ở trường Đại học</Link>
            </li>
            <li>
              <span>1. Ngành Máy tính & Công nghê thông tin</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="content-scroll">
        <div className="container container-resize container-15">
          <div className="row">
            {Array(15)
              .fill()
              .map((item, index) => (
                <div className="col-md-3 col-15" key={index}>
                  <div className="item-field item-field-btns">
                    <div className="finished">
                      <img
                        className="w-100"
                        src={toAbsoluteUrl("../media/home/finished.png")}
                        alt=""
                      />
                    </div>
                    <div className="images">
                      <img
                        className="w-100"
                        src={toAbsoluteUrl("../media/home/item-1.png")}
                        alt=""
                      />
                      <div className="btn-view">
                        <button className="btn-viewed">Học thử</button>
                        <button className="btn-viewed">Làm kiểm tra</button>
                      </div>
                    </div>
                    <h3>
                      {index + 1}. Lĩnh vực Máy tính & Công nghệ thông tin
                    </h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
