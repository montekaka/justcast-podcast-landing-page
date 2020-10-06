import React from "react";

const WidgetPlayerMenu = ({handleSectionChange, menuItems}) => {
  if(handleSectionChange) {
    return (
      <>
        <nav>
          {
            menuItems.map((menuItem) => 
              <div key={menuItem.key} className="nav-item" onClick={
                () => {
                  handleSectionChange(menuItem.key)
                }
              }>{menuItem.label}</div>
            )
          }
        </nav>
        <div className="power-by"></div>
      </>    
    )
  }

  return null;
}

export default WidgetPlayerMenu;