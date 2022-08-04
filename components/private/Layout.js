import Head from 'next/head'

const style = {
  minHeight: "100vh",
  width: "100%",
  padding: "40px 20px",
  display: "flex", 
  flexDirection: "column",  
  alignItems: "center",  
  backgroundColor: "#DCE1E3",
}

const Layout = (props) => {
  const {podcast_title, artwork_link} = props;
  
  return (
    <>
      <Head>        
        <title>{podcast_title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta key="robots" name="robots" content="noindex,follow" />
        <meta key="googlebot" name="googlebot" content="noindex,follow" />
        {artwork_link && 
          <>
            <meta content={artwork_link} property='og:image'/>
            <meta content='800' property='og:image:height'/>
            <meta content='800' property='og:image:width'/>
            <link rel="shortcut icon" type="image/x-icon" href={artwork_link} />
          </>          
        }
      </Head>    
      <div style={style}>
        <div id="private-show-wrapper" style={{ padding: "10px", display: "flex", flexDirection: "column", gap: "14px"}}>
          {props.children}
        </div>
      </div>
    </>
  )
}

export default Layout