import Head from 'next/head'

const WidgetLayout = (props) => {
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
            <link rel="apple-touch-icon" sizes="180x180" href={artwork_link} />
            <link rel="icon" type="image/png" sizes="32x32" href={artwork_link} />
          </>          
        }
      </Head>    
      {props.children}
    </>
  )
}

export default WidgetLayout