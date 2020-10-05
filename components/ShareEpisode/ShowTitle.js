import React from 'react';

const ShowTitle = ({title}) => {
  if(title) {
    return (
      <>
        <section className="bg-dark pt-10 pb-11 overlay overlay-black overlay-60 jarallax">
          <div className="container-md">
            <div className="row justify-content-center">
              <div className="col">
                <h1 className="font-weight-bold text-white mb-2">
                  {title}
                </h1>
              </div>
            </div>          
          </div>
        </section>
        <div className="position-relative">
          <div className="shape shape-bottom shape-fluid-x svg-shim text-light">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor"/></svg>
          </div>
        </div>        
      </>    
    )
  }

  return null;
}

export default ShowTitle;