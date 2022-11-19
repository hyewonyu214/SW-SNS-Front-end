import { useState } from "react";
import "./App.css";
import Main from "./components/Main";

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
  return (
    <div className="AppBody">
      {!user ? (
        <Main getAuth={getAuth} />
      ) : (
        // <div className={`HomeBody ${mode}`}>
        <div className="leftBar">
          <div className="fixed"></div>
        </div>
        // </div>
      )}
    </div>
  );
}

export default App;
