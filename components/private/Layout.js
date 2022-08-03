const style = {
  minHeight: "100vh",
  width: "100%",
  padding: "40px 20px",
  display: "flex", 
  flexDirection: "column",  
  alignItems: "center",  
  backgroundColor: "#DCE1E3",
}

const Layout = ({ children }) => {
  return (
    <div style={style}>
      <div id="private-show-wrapper" style={{ padding: "10px", display: "flex", flexDirection: "column", gap: "14px"}}>
        {children}
      </div>
    </div>
  )
}

export default Layout