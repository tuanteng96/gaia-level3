import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { changeAsideStatus } from "../../features/Auth/_redux/AuthSlice";

export default function Social() {
  const [isOpen, setIsOpen] = useState(true);
  const buttonRef = useRef();
  const dispath = useDispatch();

  useEffect(() => {
    if (buttonRef.current.classList.contains("active")) {
      dispath(changeAsideStatus("on"));
    } else {
      dispath(changeAsideStatus("off"));
    }
  }, [buttonRef, isOpen, dispath]);

  return (
    <div id="ezs_social" className="social">
      <a href="https://www.facebook.com/hocduancunggaia ">
        <span className="icon">
          <i className="fab fa-facebook-f"></i>
        </span>
        <span className="text">Học dự án cùng GAIA</span>
      </a>
      <button
        type="button"
        id="ezs_aside_toggle"
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fas fa-caret-left"></i>
      </button>
    </div>
  );
}
