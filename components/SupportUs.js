// patreon_support_link
import React from "react";

const SupportUs = ({patreon_support_link}) => {

  if(patreon_support_link) {
    return (
      <div style={{marginBottom: "20px"}}>
        <a className="btn btn-danger btn-block lift" href={patreon_support_link}>Become a patron</a>
      </div>
    )
  }

  return null;
}

export default SupportUs