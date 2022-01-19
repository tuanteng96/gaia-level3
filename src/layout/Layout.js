import React from "react";
import Aside from "../components/aside/Aside";
import LayoutInit from "./LayoutInit";

export default function Layout({ children }) {
  return (
    <div className="d-flex h-100">
      <Aside />
      <div id="ezs_content" className="content">{children}</div>
      <LayoutInit />
    </div>
  );
}
