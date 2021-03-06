import React from "react";

const EmailUsButton = ({subject, email}) => {
  if(email) {
    return (
      <a className="btn btn-success btn-block lift" href={`mailto:${email}?subject=${subject}`}>Email us your feedback</a>
    )
  }

  return null;
}

export default EmailUsButton;