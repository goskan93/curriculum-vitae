import React from "react";
import {backgroundImage} from "../images/index";

function BackgroundImage(props) {
  return (
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#BF214B",
        minHeight: 200,
      }}
    >
      {props.children}
    </div>
  );
}
export default BackgroundImage;
