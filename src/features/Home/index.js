import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../helpers/AssetsHelpers";
import { Animated } from "react-animated-css";
import "../../_assets/sass/pages/_home.scss";

function Home(props) {
  const [isOpenUser, setIsOpenUser] = useState(true);
  const wrapperRef = useRef(null);

  return (
    <div className="page-home d-flex flex-column justify-content-between">
      <div className="page-home__logo">
        <img
          src={toAbsoluteUrl("/media/logos/logo-gaia.png")}
          alt="Học Cùng Gaia"
        />
      </div>
      <div className="page-home__content">
        <div className="text-center page-home__title">
          <img src={toAbsoluteUrl("/media/home/title.png")} alt="" />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Animated
                animationIn="flipInY"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div className="home-box">
                  <Link to="/" className="d-block">
                    <div className="d-flex flex-column align-items-center">
                      <div className="image">
                        <img
                          src={toAbsoluteUrl("/media/home/icon-1.png")}
                          alt=""
                        />
                      </div>
                      <div className="title d-flex flex-column align-items-center">
                        <span className="line-height-md mb-2">
                          Cafetech HTV cùng GAIA :
                        </span>
                        <span className="text-uppercase line-height-md">
                          Hướng nghiệp tương lai
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </Animated>
            </div>
            <div className="col-md-3">
              <Animated
                animationIn="flipInY"
                animationOut="fadeOut"
                isVisible={true}
                animationInDelay={200}
              >
                <div className="home-box">
                  <Link to="/" className="d-block">
                    <div className="d-flex flex-column align-items-center">
                      <div className="image">
                        <img
                          src={toAbsoluteUrl("/media/home/icon-2.png")}
                          alt=""
                        />
                      </div>
                      <div className="title d-flex flex-column align-items-center">
                        <span className="text-uppercase line-height-md mb-2">
                          Trải nghiệm học môn học
                        </span>
                        <span className="text-uppercase line-height-md">
                          ở trường đại học
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </Animated>
            </div>
            <div className="col-md-3">
              <Animated
                animationIn="flipInY"
                animationOut="fadeOut"
                isVisible={true}
                animationInDelay={400}
              >
                <div className="home-box">
                  <Link to="/" className="d-block">
                    <div className="d-flex flex-column align-items-center">
                      <div className="image">
                        <img
                          src={toAbsoluteUrl("/media/home/icon-4.png")}
                          alt=""
                        />
                      </div>
                      <div className="title d-flex flex-column align-items-center">
                        <span className="text-uppercase line-height-md mb-2">
                          Trải nghiệm học môn học
                        </span>
                        <span className="text-uppercase line-height-md">
                          ở trường đại học
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </Animated>
            </div>
            <div className="col-md-3">
              <Animated
                animationIn="flipInY"
                animationOut="fadeOut"
                isVisible={true}
                animationInDelay={600}
              >
                <div className="home-box">
                  <Link to="/" className="d-block">
                    <div className="d-flex flex-column align-items-center">
                      <div className="image">
                        <img
                          src={toAbsoluteUrl("/media/home/icon-3.png")}
                          alt=""
                        />
                      </div>
                      <div className="title d-flex flex-column align-items-center">
                        <span className="text-uppercase line-height-md mb-2">
                          Bài giảng
                        </span>
                        <span className="text-uppercase line-height-md">
                          Định hướng nghề nghiệp
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </Animated>
            </div>
          </div>
        </div>
      </div>
      <div className="page-home__user d-flex justify-content-end">
        <div className="info" ref={wrapperRef}>
          <button
            type="button"
            className="rounded-circle"
            onClick={() => setIsOpenUser(!isOpenUser)}
          >
            <img src={toAbsoluteUrl("/media/icons/icon-user.png")} alt="" />
          </button>
          {isOpenUser && (
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              isVisible={true}
            >
              <div className="info-content text-center text-primary-900 font-weight-900">
                <Link to="">
                  <img
                    src={toAbsoluteUrl("/media/icons/icon-edit.png")}
                    alt="Chỉnh sửa"
                  />
                </Link>
                <div className="text-1">Xin chào,</div>
                <div className="text-2">Nguyễn Tài Tuấn</div>
                <div className="text-1">Lớp 12 Trường THPT GAIA</div>
              </div>
            </Animated>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
