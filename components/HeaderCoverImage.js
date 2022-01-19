import React from "react";

const HeaderCoverImage = ({imageURL}) => {

  const tranboxStyle = {
    backgroundColor: "black",
    opacity: "0.6",
    width: "100%",
    height: "100%"
  }

  return (
    <div className="col-12 col-md-5 align-self-stretch">
      <div className="d-md-none img-cover" style={{display: "flex", justifyContent: "center", paddingTop: "20px"}}>
        <img src={encodeURI(imageURL)} alt="podcast artwork" className="img-cover" style={{maxWidth: "60%"}}/>
      </div>      
      <div className="d-none d-md-block vw-50 h-100 float-right bg-cover" style={{
        backgroundImage: `url(${encodeURI(imageURL)})`
      }}>
        <div style={tranboxStyle}/>
      </div>
    </div>
  )
}

export default HeaderCoverImage;