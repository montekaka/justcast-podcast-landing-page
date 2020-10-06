import React from "react";

const MinimizePlayerButton = ({handleMinimizePlayer, handleSectionChange, section}) => {
  const handleClose = () => {
    handleSectionChange('control')
  }

  if(handleMinimizePlayer && section === 'control') {
    return (
      // mini player hanlder
      <div onClick={handleMinimizePlayer}>
        <svg className="bi bi-dash" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M5.5 10a.5.5 0 01.5-.5h8a.5.5 0 010 1H6a.5.5 0 01-.5-.5z" clipRule="evenodd"></path>
        </svg>
      </div>
    )
  } else if (['subscribe','share','more_info'].includes(section) && handleSectionChange) {
    return (
      // close share handler
      <div onClick={handleClose}>
        <svg className="bi bi-x-square" width="1.4em" height="1.4em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M16 3H4a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4z" clipRule="evenodd"></path>
          <path fillRule="evenodd" d="M9.293 10L6.646 7.354l.708-.708L10 9.293l2.646-2.647.708.708L10.707 10l2.647 2.646-.708.708L10 10.707l-2.646 2.647-.708-.707L9.293 10z" clipRule="evenodd"></path>
        </svg>
      </div>
    )
  }
  return null;
}

export default MinimizePlayerButton;