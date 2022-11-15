import React from "react";
import "../css/Main.css";

const Main = () => {
  return (
    //Main UX/UI
    <div className="mainBody">
      <div className="container">
        <div className="bgimg">
          <img className="logo-white" src="/img/logoWhite-removebg.png"></img>
        </div>
        <section className="login-form">
          <img className="logo" src="/img/logo.png"></img>
        </section>
      </div>
    </div>
  );
};

export default Main;
