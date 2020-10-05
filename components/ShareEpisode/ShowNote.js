import React from 'react';

const ShowNote = ({description}) => {
  return (
    <>
      <h3 className="mb-5">SHOW NOTES</h3>
      {description ? <div dangerouslySetInnerHTML={{__html: description}}/> : null}
    </>
  )
}

export default ShowNote;