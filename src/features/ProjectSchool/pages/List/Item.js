import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { toAbsoluteUrlSv } from "../../../../helpers/AssetsHelpers";
import { useSelector } from "react-redux";

Item.propTypes = {
  item: PropTypes.object,
};

function Item({ item }) {
  const [height, setHeight] = useState(0);
  const elmRef = useRef(null);
  const { pathname } = useLocation();

  const { asideStatus } = useSelector((state) => state.auth);

  useEffect(() => {
    setHeight(elmRef.current.offsetWidth);
  }, [elmRef, asideStatus]);

  return (
    <div className="col-md-6 col-lg-4 col-xxxl-3 col-15">
      <Link
        to={`${pathname}/${item.ID}`}
        className="item-field item-field-btns"
      >
        <div
          className="images text-center d-flex align-items-center justify-content-center flex-column"
          ref={elmRef}
          style={{ height: `${height}px` }}
        >
          <img
            className="max-w-100"
            src={toAbsoluteUrlSv(item.Thumbnail)}
            alt={item.Title}
          />
        </div>
        <h3>{item.Title}</h3>
      </Link>
    </div>
  );
}

export default Item;
