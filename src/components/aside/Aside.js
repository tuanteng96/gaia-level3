/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { checkIsActive } from "../../helpers/RouterHelpers";
import HomeCrud from "../../features/Home/_redux/HomeCrud";
import Brand from "../brand/Brand";
import Social from "../social/Social";

const convertTree = (list) => {
  var map = {},
    node,
    roots = [],
    i;

  for (i = 0; i < list.length; i += 1) {
    map[list[i].ID] = i;
    list[i].children = [];
  }

  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.ParentID && node.ParentID !== 0) {
      list[map[node.ParentID]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots.map((item) => {
    return {
      ...item,
      id: item.ID,
      children:
        item.children && item.children.length > 0
          ? item.children.map((sub) => {
              return {
                ...sub,
                id: sub.ID,
              };
            })
          : [],
    };
  });
};

function Aside(props) {
  const [CateList, setCateList] = useState([]);
  const location = useLocation();

  const getCateCurrent = () => {
    HomeCrud.getCate(1)
      .then(({ data }) => {
        const result = convertTree(data);
        setCateList(result ? result[0].children : []);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCateCurrent();
  }, []);

  const converNumber = (index) => {
    switch (index) {
      case 1:
        return "I";
      case 2:
        return "II";
      case 3:
        return "III";
      case 4:
        return "IV";
      default:
        return "";
    }
  };

  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };

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
          {CateList &&
            CateList.map((item, index) => (
              <li
                className={`menu-item ${item.children.length > 0 &&
                  "menu-item-submenu"} ${getMenuItemActive(
                  `/${index + 1}/${item.NameFr}/${item.ID}`,
                  false
                )}`}
                aria-haspopup="true"
                data-menu-toggle={item.children.length > 0 && "hover"}
                key={index}
              >
                <NavLink
                  className={`menu-link ${item.children.length > 0 &&
                    "menu-toggle"}`}
                  to={`/${index + 1}/${item.NameFr}/${item.ID}`}
                >
                  <span className="svg-icon menu-icon">
                    <i className={item.KeySEO}></i>
                  </span>
                  <span className="menu-text">
                    <span>{converNumber(index + 1)}.</span>
                    {item.Title}
                  </span>
                </NavLink>
                {item.children.length > 0 && (
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
                            <span className="pe-2">2.</span> Ngành Cơ khí & Tự
                            động
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
                            <span className="pe-2">4.</span> Ngành Kiến trúc và
                            Mỹ thuật
                          </span>
                        </NavLink>
                      </li>
                      {/*end::2 Level*/}

                      {/*begin::2 Level*/}
                      <li className={`menu-item`} aria-haspopup="true">
                        <NavLink className="menu-link" to="/">
                          <span className="menu-text d-flex">
                            <span className="pe-2">5.</span> Ngành Công nghệ Hóa
                            Sinh
                          </span>
                        </NavLink>
                      </li>
                      {/*end::2 Level*/}
                    </ul>
                  </div>
                )}
              </li>
            ))}
        </ul>
      </div>
      <Social />
    </div>
  );
}

export default Aside;
