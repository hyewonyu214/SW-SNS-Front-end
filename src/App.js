import "../src/css/App.css";
import "../src/css/Main.css";
import "../src/css/SignUp.css";
import "../src/css/FindId.css";
import "../src/css/FindPw.css";
import Main from "./components/Main";
import Header from "./layout/Header";
import Left from "./layout/Left";

import { useEffect, useState } from "react";
import AnimateRoutes from "./components/AnimateRoutes";

<script
  src="https://kit.fontawesome.com/468fac8028.js"
  crossorigin="anonymous"
></script>;

function App() {
  const [user, setUser] = useState(false);
  const [auth, setAuth] = useState("");

  const getAuth = (data) => {
    // sessionStorage는 브라우저 창이 닫히면 세션이 종료되면서 storage에 저장된 데이터도 소멸됩니다.
    sessionStorage.setItem("id", data.mb_id);
    sessionStorage.setItem("nick", data.mb_nick);
    sessionStorage.setItem("email", data.mb_email);
    sessionStorage.setItem("bg", data.mb_bg);
    sessionStorage.setItem("pic", data.mb_pic);
    sessionStorage.setItem("mode", "lightMode");
    setAuth("로그인성공");
  };

  useEffect(() => {
    sessionStorage.getItem("id") !== null && setUser(true);
  }, [auth]);

  const [mode, setMode] = useState(sessionStorage.getItem("mode"));
  const getMode = (data) => {
    setMode(data);
    sessionStorage.setItem("mode", data);
  };

  const [headerName, setHeaderName] = useState("Home");
  const getHeaderName = (data) => {
    setHeaderName(data);
  };

  return (
    <div className="AppBody">
      {!user ? (
        <Main getAuth={getAuth} />
      ) : (
        <div className={`HomeBody ${mode}`}>
          <div className="leftBar">
            <div className="fixed">
              <Left
                mode={mode}
                getMode={getMode}
                getHeaderName={getHeaderName}
              />
            </div>
          </div>
          <div className="body">
            <div className="headerBar">
              <div className="fixed">
                <Header headerName={headerName} />
              </div>
            </div>
          </div>
          <div className="view">
            <AnimateRoutes />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
