import React from "react";

const RightSideCoverImage = ({imageURL}) => {
  const imageStyle = {
    backgroundImage: `url(${encodeURI(imageURL)})`
  }

  const tranboxStyle = {
    backgroundColor: "black",
    opacity: "0.6",
    width: "100%",
    height: "100%"
  }

  return (
    <div className="col-lg-7 offset-lg-1 align-self-stretch d-none d-lg-block">
      <div className="h-100 w-cover bg-cover" style={imageStyle}>
        <div style={tranboxStyle}/>
      </div>
      <div className="shape shape-left shape-fluid-y svg-shim text-white">
        <svg viewBox="0 0 100 1544" fill="#F1F4F8" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h100v386l-50 772v386H0V0z" fill="#F1F4F8"/></svg>
      </div>      
    </div>
  )
}

export default RightSideCoverImage;