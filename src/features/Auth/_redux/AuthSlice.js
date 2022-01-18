import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const userInfo = localStorage.getItem("_info_review") ? JSON.parse(localStorage.getItem("_info_review")) : {};

const auth = createSlice({
    name: "auth",
    initialState: {
        user: userInfo
    },
    reducers: {
        setUser: (state, action) => {
            return {
                ...state,
                user: action.payload
            };
        },
        logoutUser: (state, action) => {

        }
    }
});

const persistConfig = {
    key: 'auth',
    storage: storage,
    //blacklist: ['user']
};

const { reducer, actions } = auth;
export const { setUser } = actions;
export default persistReducer(persistConfig, reducer);