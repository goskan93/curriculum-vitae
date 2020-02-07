import React from "react";
import {backgroundImage} from "../images/index";

function BackgroundImage(props) {
  const { image } = props
  return (
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${image ? image : backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#BF214B",
        minHeight: 150,
      }}
    >
      {props.children}
    </div>
  );
}
export default BackgroundImage;
