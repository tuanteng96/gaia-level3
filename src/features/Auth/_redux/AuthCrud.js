import axiosClient from "../../../redux/axioClient";


const GET_TOKEN_URL = "/api/v6/wowstudent?cmd=Login";

const getToken = (data) => {
    return axiosClient.post(GET_TOKEN_URL, JSON.stringify(data));
};

const AuthCrud = {
    getToken
};
export default AuthCrud;