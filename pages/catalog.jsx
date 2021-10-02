export default function Catalog(props) {
  return (
    <div>Catalogo - {props.fullUrl}</div>
  )
}

Catalog.getInitialProps = async (ctx) => {
  const req = ctx.req;
  let fullUrl
  if (req) {
    // Server side rendering
    fullUrl = req.headers.host?.split(':')[0];
  } else {
    // Client side rendering
    fullUrl = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '')
  }

  if (fullUrl.split('.')[0].length < 3) {
    ctx.res.writeHead(302, { // or 301
      Location: "http://denis-dev/",

    });
    res.end();
  }

  return { fullUrl: fullUrl }
}
