import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import HomeCrud from "../Home/_redux/HomeCrud";
import { Helmet } from "react-helmet";
import Item from "./pages/List/Item";

function ProjectSchool(props) {
    const [loading, setLoading] = useState(false);
    const [CateCurrent, setCateCurrent] = useState({});
    const [List, setList] = useState([]);
    const { pathname } = useLocation();
    let { Id } = useParams();

    const getList = async () => {
        setLoading(true);
        try {
            const { data: CurrentCate } = await HomeCrud.getCate(Id);
            const CurrentList = CurrentCate ? CurrentCate.filter(item => item.ParentID === Number(Id)) : [];

            setCateCurrent(CurrentCate[0]);
            setList(CurrentList);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <>
        {loading && (
          <div className="h-100 w-100 d-flex align-items-center justify-content-center">
            <div className="loader"></div>
          </div>
        )}
        {!loading && (
          <React.Fragment>
            <Helmet>
              <title>{CateCurrent?.Title}</title>
            </Helmet>
            <div className="container container-resize">
              <div className="braum">
                <ul>
                  <li>
                    <Link to={pathname}>II. {CateCurrent?.Title}</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-scroll fix-padding">
              <div className="container container-resize container-15">
                <div className="row">
                  {List && List.length > 0 ? (
                    List.map((item, index) => (
                      <Item key={index} item={item} />
                    ))
                  ) : (
                    <div className="col-md-12">
                      <div className="box-notfound">Không có bài</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </>
    );
}

export default ProjectSchool;
