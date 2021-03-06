import { Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { toAbsoluteUrl, toAbsoluteUrlSv } from "../../helpers/AssetsHelpers";
import HomeCrud from "../Home/_redux/HomeCrud";
import {Helmet} from "react-helmet";

function ProjectVideos(props) {
  const [loading, setLoading] = useState(false);
  const [CateCurrent, setCateCurrent] = useState({});
  const [List, setList] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [itemModal, setItemModal] = useState(null);
  let { Id } = useParams();
  let { pathname } = useLocation();

  const getList = async () => {
    setLoading(true);
    try {
      const { data: CurrentCate } = await HomeCrud.getCate(Id);
      const { data: CurrentList } = await HomeCrud.getList(Id);
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

  const OpenModal = (item) => {
    setItemModal(item);
    setIsModal(true);
  };
  const HideModal = () => {
    setItemModal(null);
    setIsModal(false);
  };

  const isTypeVideo = () => {
    if (!itemModal) return;
    if (itemModal.Thumbnail.search("youtube") > -1) {
      return "YOUTUBE";
    }
    return "CDN";
  };

  return (
    <>
      {
        loading && <div className="h-100 w-100 d-flex align-items-center justify-content-center">
          <div className="loader"></div>
        </div>
      }
      {
        !loading && (
          <React.Fragment>
            <Helmet>
              <title>{CateCurrent?.Title}</title>
            </Helmet>
            <div className="container container-resize">
              <div className="braum">
                <ul>
                  <li>
                    <Link to={pathname}>I. {CateCurrent?.Title}</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-scroll">
              <div className="container container-resize container-15">
                <div className="row">
                  {List &&
                    List.length > 0 ? List.map((item, index) => (
                      <div className="col-md-6 col-lg-4 col-xl-4 col-xxxl-3 col-15" key={index}>
                        <div
                          className="item-field item-field-play"
                          onClick={() => OpenModal(item)}
                        >
                          <div className="images">
                            <img
                              className="w-100"
                              src={toAbsoluteUrlSv(item.FileName)}
                              alt={item.Title}
                            />
                            <div className="icon-play">
                              <img
                                src={toAbsoluteUrl("/media/home/icon-play.png")}
                                alt="Play"
                              />
                            </div>
                          </div>
                          <h3>
                            {index + 1}. {item.Title}
                          </h3>
                        </div>
                      </div>
                    )) : (
                    <div className="col-md-12">
                      <div className="box-notfound">Kh??ng c?? b??i</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </React.Fragment>
        )
      }
      <Modal
        show={isModal}
        fullscreen={true}
        onHide={HideModal}
        dialogClassName="modal-iframe"
      >
        <Modal.Body className="p-0">
          <div className="d-flex justify-content-between p-3 modal-iframe-title">
            <div className="brand-top d-flex align-items-end ps-0">
              <div className="brand-logo max-w-80px">
                <Link to="/">
                  <img
                    className="w-100"
                    src={toAbsoluteUrl("/media/logos/logo-modal.png")}
                    alt="H???c c??ng GaiA"
                  />
                </Link>
              </div>
              <div className="flex-column brand-slug text-uppercase ps-2">
                <span className="mb-1 line-height-md">D??? ??n</span>
                <span>?????nh h?????ng ngh??? nghi???p</span>
              </div>
            </div>
            <div className="cursor-pointer" onClick={() => HideModal()}>
              <img
                className="w-100"
                src={toAbsoluteUrl("/media/home/icon-close.png")}
                alt="Close"
              />
            </div>
          </div>
          <div className="modal-iframe-content">
            {itemModal && (
              <React.Fragment>
                {isTypeVideo() === "YOUTUBE" && (
                  <React.Fragment>
                    <iframe
                      src={itemModal.Thumbnail}
                      title={itemModal.Title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </React.Fragment>
                )}
                {isTypeVideo() === "CDN" && (
                  <React.Fragment>
                    <iframe
                      src={itemModal.Thumbnail}
                      title={itemModal.Title}
                    ></iframe>
                  </React.Fragment>
                )}
              </React.Fragment>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectVideos;
