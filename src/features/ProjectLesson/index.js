import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { toAbsoluteUrl } from "../../helpers/AssetsHelpers";
import HomeCrud from "../Home/_redux/HomeCrud";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PerfectScrollbar from "react-perfect-scrollbar";
import { toast } from 'react-toastify';
import moment from 'moment';
import { Helmet } from "react-helmet";

const perfectScrollbarOptions = {
    wheelSpeed: 2,
    wheelPropagation: false,
};

function ProjectLesson(props) {
    const [loading, setLoading] = useState(false);
    const [CateCurrent, setCateCurrent] = useState({});
    const [List, setList] = useState([]);
    const [isModal, setIsModal] = useState(false);
    const [itemModal, setItemModal] = useState(null);
    const { Auth } = useSelector(({ auth }) => ({
        Auth: auth.user
    }));
    let { Id } = useParams();
    let { pathname } = useLocation();

    const getList = async () => {
        setLoading(true);
        try {
            const { data: CurrentCate } = await HomeCrud.getCate(Id);
            setCateCurrent(CurrentCate[0]);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        /* eslint-disable */
        if (Auth.Programs && Array.isArray(Auth.Programs)) {
            let newData = [];
            Auth.Programs.map(item => {
                if (item.Lessons && Array.isArray(item.Lessons)) {
                    item.Lessons.map(xitem => {
                        if (xitem.Begin) {
                            newData.push(xitem);
                        }
                    })
                }
            });
            newData = newData.sort((a, b) => {
                return new Date(b.End) - new Date(a.End);
            });
            setList(newData)
        }
        /* eslint-enable */
    }, [Auth]);

    const OpenModal = (item) => {
        if (!item.isDetail && isExpires(item.End)) {
            toast.error("Hết hạn làm bài kiểm tra !", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2500
            });
            return;
        }
        setItemModal(item);
        setIsModal(true);
    };
    const HideModal = () => {
        setItemModal(null);
        setIsModal(false);
    };

    const isExpires = (End) => {
        return moment().diff(End, 'minutes') > 0;
    }

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
                            <title>
                                {CateCurrent?.Title}
                            </title>
                        </Helmet>
                        <div className="container container-resize">
                            <div className="braum">
                                <ul>
                                    <li>
                                        <Link to={pathname}>III. {CateCurrent.Title}</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="content-scroll pt-4">
                            <div className="container container-resize container-15">
                                <div className="row">
                                    {List && List.length > 0 ? List.map((item, index) => (
                                        <div className="col-md-6 col-lg-4 col-xl-4 col-xxxl-3 col-15" key={index}>
                                            <div className="item-field item-field-btns">
                                                <div className={`finished ${item.Point > 0 ? "active" : ""}`}>
                                                    <img
                                                        className="w-100"
                                                        src={toAbsoluteUrl("/media/home/finished.png")}
                                                        alt="finished"
                                                    />
                                                </div>
                                                <div className={`images ${isExpires(item.End) ? "expires" : ""}`}>
                                                    <img
                                                        className="w-100"
                                                        src={item.Thumbnail}
                                                        alt={item.Title}
                                                    />
                                                    <div className="btn-view">
                                                        <button className="btn-viewed" onClick={() => OpenModal({ ...item, isDetail: true })}>Mở bài giảng</button>
                                                        <button className="btn-viewed" onClick={() => OpenModal({ ...item, isDetail: false })}>Làm kiểm tra</button>
                                                    </div>
                                                </div>
                                                <h3>
                                                    {index + 1}. {item.Title}
                                                </h3>
                                            </div>
                                        </div>
                                    )) : (
                                        <div className="col-md-12">
                                            <div className="box-notfound">Không có bài</div>
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
                                        alt="Học cùng GaiA"
                                    />
                                </Link>
                            </div>
                            <div className="flex-column brand-slug text-uppercase ps-2">
                                <span className="mb-1 line-height-md">Dự án</span>
                                <span>Định hướng nghề nghiệp</span>
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
                                {itemModal.isDetail && <div className="detail">
                                    <PerfectScrollbar
                                        options={perfectScrollbarOptions}
                                        style={{ maxHeight: "100%", position: "relative" }}
                                    >
                                        <div className="detail-content" dangerouslySetInnerHTML={{
                                            __html: itemModal.Detail.replaceAll("/Upload/image/", "https://wowedu.net/Upload/image/")
                                        }} />
                                    </PerfectScrollbar>
                                </div>}
                                {!itemModal.isDetail && <iframe
                                    src={`https://wowedu.net/${itemModal.LMSLink}?std_token=${Auth.StdToken}&LoginCode=${Auth.LoginCode}&lessonId=${itemModal.LessonID}`}
                                    title={itemModal.Title}
                                ></iframe>}
                            </React.Fragment>
                        )}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ProjectLesson;
