import React from "react";
import { Link } from "react-router-dom";

export default function Social() {
  return (
    <div id="ezs_social" className="social px-4">
      <Link to="/">
        <span className="icon">
          <i className="fab fa-facebook-f"></i>
        </span>
        <span className="text">Học dự án cùng GAIA</span>
      </Link>
    </div>
  );
}
