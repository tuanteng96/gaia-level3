import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../helpers/AssetsHelpers";
import "../../_assets/sass/pages/_home.scss";

function Home(props) {
  return (
    <div className="page-home">
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
        <div className="container">
          <div className="row">
            <div className="col-md-4">
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
            </div>
            <div className="col-md-4">
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
            </div>
            <div className="col-md-4">
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
            </div>
          </div>
        </div>
      </div>
      <div className="page-home__user"></div>
    </div>
  );
}

export default Home;
