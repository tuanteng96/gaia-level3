import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LayoutSplashScreen } from "../../../layout/_core/EzsSplashScreen";
import AuthCrud from "./AuthCrud";
import { setUser } from "./AuthSlice";

function AuthInit(props) {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const { LoginCode } = useSelector(({ auth }) => ({
    LoginCode: auth.user.LoginCode,
  }));

  const dispatch = useDispatch();

  //
  const resultBack = () => {
    // window.location.href = "/on-tap.aspx";
    // localStorage.removeItem("_info_review");
  };

  // We should request user by authToken before rendering the application

  useEffect(() => {
    async function requestUser() {
      try {
        const { data, error } = await AuthCrud.getToken({
          LoginCode: LoginCode,
        });
        if (error) {
          setShowSplashScreen(true);
          resultBack();
        } else {
          dispatch(setUser(data));
          setShowSplashScreen(false);
        }
      } catch (error) {
        setShowSplashScreen(false);
        resultBack();
      }
    }

    if (LoginCode) {
      requestUser();
    } else {
      setShowSplashScreen(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return showSplashScreen ? <LayoutSplashScreen /> : <>{props.children}</>;
}

export default AuthInit;
