

const Client = ({ fullUrl }) => {
  return (
    <div>
      Client dashboard - {fullUrl}
    </div>
  );
}

export default Client;

Client.getInitialProps = async (ctx) => {
  const req = ctx.req;
  let fullUrl
  if (req) {
    // Server side rendering
    fullUrl = req.headers.host?.split(':')[0];
  } else {
    // Client side rendering
    fullUrl = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '')
  }
  return { fullUrl: fullUrl }
}

