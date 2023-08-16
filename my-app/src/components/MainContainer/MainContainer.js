import React from "react";
import "./main-container.css";

function MainContainer(props) {
  return <main className="container">{props.children}</main>;
}

export default MainContainer;