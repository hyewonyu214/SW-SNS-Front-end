import React, { UseRef, UseState } from "react";
import "../css/Main.css";
import axios from "axios";

const Main = ({ getAuth }) => {
  const idRef = UseRef();
  const pwRef = UseRef();

  const btn = (e) => {
    e.preventDefault();
    if (idRef.current.value === "") {
      idRef.current.nextSibling.classList.add("warning");
      setTimeout(function () {
        idRef.current.nextSibling.classList.remove("warning");
      }, 1500);
    } else if (pwRef.current.value === "") {
      pwRef.current.nextSibling.classList.add("warning");
      setTimeout(function () {
        pwRef.current.nextSibling.classList.remove("warning");
      }, 1500);
    } else {
      login();
    }
  };
  function login() {
    axios
      .post("/ittime/login", {
        mb_id: idRef.current.value,
        mb_pw: pwRef.current.value,
      })
      .then(function (res) {
        if (res.data !== "") {
          getAuth(res.data);
        } else {
          alert("아이디와 비밀번호를 확인해주세요");
        }
      })
      .catch(function (error) {
        alert("Login 실패!");
      });
  }

  //signUp 구간
  const [isActive, setIsActive] = UseState(false);
  const signUp = (e) => {
    e.preventDefault();
    if (!isActive) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const signUpIdRef = UseRef();
  const signUpPwRef = UseRef();
  const nickRef = UseRef();
  const emailRef = UseRef();
  const ckPwIdRef = UseRef();
  const idCkEmailRef = UseRef();
  const pwCkEmailRef = UseRef();

  return (
    //Main UX/UI
    <div className="mainBody">
      <div className="container">
        <div className="bgimg">
          <img className="logo-white" src="/img/logoWhite-removebg.png"></img>
        </div>
        <section className="login-form">
          <img className="logo" src="/img/logo.png"></img>
          <form action="">
            <div className="int-area">
              {/* id제약조건 */}
              <input
                maxLength={16}
                type="text"
                name="id"
                ref={idRef}
                autoComplete="off"
                required
              ></input>
              <label htmlFor="id">USER ID</label>
            </div>
            <div className="int-area">
              <input
                maxLength={16}
                type="password"
                name="pw"
                ref={pwRef}
                autoComplete="off"
                required
              ></input>
              <label htmlFor="pw">PASSWORD</label>
            </div>
            <div className="btn-area">
              <button onClick={btn} type="submit">
                LOGIN
              </button>
            </div>
          </form>
          <div className="mainCaption">
            <span className="caption">
              {/* <a onClick={findId} href="">
                Forgot ID?
              </a> */}
            </span>
            <span className="caption">
              {/* <a onClick={findPw} href="">
                Forgot Password?
              </a> */}
            </span>
          </div>
          <div className="int-area">
            <hr></hr>
            <p className="mainOr">또는</p>
            <button>Login With Kakao</button>
          </div>
          <div className="mainSignup">
            Not a Member ?{" "}
            <a onClick={signUp} href="">
              Sign Up
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
