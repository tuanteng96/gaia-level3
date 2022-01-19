import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../helpers/AssetsHelpers";

export default function Brand() {
  return (
    <div id="ezs_brand" className="brand">
      <div className="d-flex align-items-end py-4 px-3">
        <div className="brand-logo w-70px">
          <img
            className="w-100"
            src={toAbsoluteUrl("../media/logos/logo-gaia-sidebar.png")}
            alt="Học cùng GaiA"
          />
        </div>
        <div className="d-flex flex-column brand-slug text-uppercase ps-3">
          <span className="mb-1 line-height-md">Dự án</span>
          <span className="line-height-sm">Định hướng nghề nghiệp</span>
        </div>
      </div>
      <div className="brand-info d-flex justify-content-between align-items-center bg-white px-4 py-1">
        <div className="info-icon rounded-circle d-flex align-items-center justify-content-center flex-column">
          <img src={toAbsoluteUrl("../media/icons/icon-user.png")} alt="user" />
        </div>
        <div className="info-text text-primary-900 font-weight-900 d-flex flex-column align-items-center">
          <span className="line-height-xs mb-1 mt-1">Xin chào,</span>
          <span className="font-size-md line-height-sm">Nguyễn Tài Tuấn</span>
        </div>
        <Link className="w-47px text-end" to="/">
          <img
            className="w-22"
            src={toAbsoluteUrl("../media/icons/icon-edit.png")}
            alt="user"
          />
        </Link>
      </div>
    </div>
  );
}
