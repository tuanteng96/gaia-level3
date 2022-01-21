import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toAbsoluteUrl, toAbsoluteUrlSv } from "../../helpers/AssetsHelpers";
import { Animated } from "react-animated-css";
import HomeCrud from "./_redux/HomeCrud";
import "../../_assets/sass/pages/_home.scss";
import { useDispatch } from "react-redux";
import { logoutUser } from "../Auth/_redux/AuthSlice";

function Home(props) {
  const [isOpenUser, setIsOpenUser] = useState(true);
  const wrapperRef = useRef(null);
  const [CateList, setCateList] = useState([]);
  const dispath = useDispatch();

  const { Auth } = useSelector((state) => ({
    Auth: state.auth.user,
  }));

  const getCateCurrent = () => {
    HomeCrud.getCate(1)
      .then(({ data }) => {
        setCateList(data.filter((item) => item.ParentID === 1));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCateCurrent();
  }, []);

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
            {CateList &&
              CateList.map((item, index) => (
                <div className="col-md-3" key={index}>
                  <Animated
                    animationIn="flipInY"
                    animationOut="fadeOut"
                    isVisible={true}
                    animationInDelay={100 * index}
                  >
                    <div className="home-box">
                      <Link
                        to={`/${index + 1}/${item.NameFr}/${item.ID}`}
                        className="d-block"
                      >
                        <div className="d-flex flex-column align-items-center">
                          <div className="image">
                            <img src={toAbsoluteUrlSv(item.Thumbnail)} alt="" />
                          </div>
                          <div className="title d-flex flex-column align-items-center">
                            <span className="text-uppercase line-height-lg text-center">
                              {item.Title}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </Animated>
                </div>
              ))}
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
            <i className="fas fa-user"></i>
          </button>
          {isOpenUser && (
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              isVisible={true}
            >
              <div className="info-content text-center text-primary-900 font-weight-900">
                <div className="logout" onClick={() => dispath(logoutUser())}>
                  <i className="fas fa-sign-out-alt"></i>
                </div>
                <div className="text-1">Xin chào,</div>
                <div className="text-2">{Auth.FullName}</div>
                <div className="text-1">
                  {Auth.Class.Title} {Auth.School.Title}
                </div>
              </div>
            </Animated>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
