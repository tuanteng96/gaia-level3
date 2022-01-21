import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toAbsoluteUrl } from "../../helpers/AssetsHelpers";
import { logoutUser } from "../../features/Auth/_redux/AuthSlice";

export default function Brand() {
  let dispatch = useDispatch();
  const { Auth } = useSelector((state) => ({
    Auth: state.auth.user,
  }));
  return (
    <div id="ezs_brand" className="brand">
      <div className="brand-top d-flex align-items-end py-4">
        <div className="brand-logo w-70px">
          <Link to="/">
            <img
              className="w-100"
              src={toAbsoluteUrl("/media/logos/logo-gaia-sidebar.png")}
              alt="Học cùng GaiA"
            />
          </Link>
        </div>
        <div className="flex-column brand-slug text-uppercase ps-3">
          <span className="mb-1 line-height-md">Dự án</span>
          <span className="line-height-sm">Định hướng nghề nghiệp</span>
        </div>
      </div>
      <div className="brand-info">
        <div className="brand-info-to d-flex justify-content-between align-items-center bg-white py-1">
          <div className="info-icon rounded-circle">
            <i className="fas fa-user"></i>
          </div>
          <div className="info-text text-primary-900 font-weight-900 d-flex flex-column align-items-center">
            <span className="line-height-xs mb-1 mt-1">Xin chào,</span>
            <span className="font-size-md line-height-sm">{Auth.FullName}</span>
          </div>
          <div className="icon-img" onClick={() => dispatch(logoutUser())}>
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
