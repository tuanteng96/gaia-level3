import axiosClient from "../../../redux/axioClient";


const GET_CATE_URL = "/api/v6/content?cmd=tree";
const GET_LIST_URL = "/api/v6/content?cmd=mlist";
const GET_DETAIL_URL = "/api/v6/content?cmd=mdetail";

const getCate = (ID) => {
    return axiosClient.get(`${GET_CATE_URL}&rootid=${ID}`);
};
const getList = (ID) => {
    return axiosClient.get(`${GET_LIST_URL}&cateid=${ID}`);
};
const getDetail = (ID) => {
    return axiosClient.get(`${GET_DETAIL_URL}&id=${ID}`);
};

const HomeCrud = {
    getCate,
    getList,
    getDetail
};
export default HomeCrud;