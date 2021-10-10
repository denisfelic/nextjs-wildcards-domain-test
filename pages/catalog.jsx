export default function Catalog(props) {
  return (
    <div>Catalogo - {props.fullUrl}</div>
  )
}

Catalog.getInitialProps = async (ctx) => {
  const req = ctx.req;
  const res = ctx.res;
  let fullUrl
  if (req) {
    // Server side rendering
    fullUrl = req.headers.host?.split(':')[0];
    // TODO: Refactor to make get this from database
    if (fullUrl.split('.')[0].length < 3 || fullUrl == 'localhost') {
      res.writeHead(302, { // or 301
        Location: process.env.DEV == 'true' ? process.env.DOMAIN_DEV : process.env.DOMAIN_PROD,

      });
      res.end();
    }
  } else {
    // Client side rendering
    fullUrl = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '')
  }



  return { fullUrl: fullUrl }
}