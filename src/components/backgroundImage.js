import React from "react";
import backgroundImage from "../images/background.jpg";

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
        minHeight: 300,
        opacity: 0.5
      }}
    >
      {props.children}
    </div>
  );
}
export default BackgroundImage;
