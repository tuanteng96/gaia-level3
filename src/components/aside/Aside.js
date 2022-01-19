/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import { toAbsoluteUrl } from "../../helpers/AssetsHelpers";
import Brand from "../brand/Brand";
import Social from "../social/Social";

function Aside(props) {
  return (
    <div id="ezs_aside" className="aside aside-left">
      <Brand />
      <div
        id="kt_aside_menu"
        className="aside-menu"
        data-menu-vertical="1"
        data-menu-scroll="1"
      >
        <ul className="menu-nav py-3 px-4">
          <li className={`menu-item`} aria-haspopup="true">
            <NavLink className="menu-link" to="/dashboard">
              <span className="svg-icon menu-icon">
                <i className="fab fa-youtube"></i>
              </span>
              <span className="menu-text">
                <span>I.</span>
                Cafetech HTV cùng GAIA : HƯỚNG NGHIỆP TƯƠNG LAI
              </span>
            </NavLink>
          </li>
          <li
            className={`menu-item menu-item-submenu`}
            aria-haspopup="true"
            data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/dashboard">
              <span className="svg-icon menu-icon">
                <i className="fas fa-graduation-cap"></i>
              </span>
              <span className="menu-text">
                <span>II.</span>
                Trải nghiệm học môn học ở trường Đại học
              </span>
            </NavLink>
            <div className="menu-submenu ">
              <i className="menu-arrow" />
              <ul className="menu-subnav">
                {/*begin::2 Level*/}
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/">
                    <span className="menu-text d-flex">
                      <span className="pe-2">1.</span>
                      Ngành máy tính & Công Nghệ thông tin
                    </span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/">
                    <span className="menu-text d-flex">
                      <span className="pe-2">2.</span> Ngành Cơ khí & Tự động
                    </span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/">
                    <span className="menu-text d-flex">
                      <span className="pe-2">3.</span> Ngành Xây dựng
                    </span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/">
                    <span className="menu-text d-flex">
                      <span className="pe-2">4.</span> Ngành Kiến trúc và Mỹ
                      thuật
                    </span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/">
                    <span className="menu-text d-flex">
                      <span className="pe-2">5.</span> Ngành Công nghệ Hóa Sinh
                    </span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}
              </ul>
            </div>
          </li>
          <li className={`menu-item`} aria-haspopup="true">
            <NavLink className="menu-link" to="/dashboard">
              <span className="svg-icon menu-icon">
                <i className="fas fa-school"></i>
              </span>
              <span className="menu-text">
                <span>III.</span>
                Tìm hiểu thông tin về các trường Đại học
              </span>
            </NavLink>
          </li>
          <li className={`menu-item`} aria-haspopup="true">
            <NavLink className="menu-link" to="/dashboard">
              <span className="svg-icon menu-icon">
                <i className="fas fa-book-open"></i>
              </span>
              <span className="menu-text">
                <span>IV.</span>
                Bài giản Định hướng nghề nghiệp
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
      <Social />
    </div>
  );
}

export default Aside;
