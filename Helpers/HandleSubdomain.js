async function HandleSubdomain(ctx) {
  const req = ctx.req;
  const res = ctx.res;
  let fullUrl
  if (req) {
    // Server side rendering
    fullUrl = req.headers.host?.split(':')[0];
    // TODO: Refactor to make get this from database
    if (fullUrl.split('.')[0].length < 3) {
      res.writeHead(302, { // or 301
        Location: "https://www.denis-dev.com",

      });
      res.end();
    }


  } else {
    // Client side rendering
    fullUrl = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '')
  }


  const data = [
    {
      name: 'Sociedade Esportiva Palmeiras',
      hostname: 'palmeiras',
      products: [
        {
          name: 'Camiseta Masculina',
          price: 129.99, sizes: ['P', 'M', 'G'],
          picture: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQXpfZVRMnfAczBuyc-cp-FoeGSZ9VetOqmpVCwPir8NU5P2s_1rxaFZPXq02azleifO7QPoa8mfXg&usqp=CAc'
        },
        {
          name: 'Camiseta Feminina',
          price: 129.99,
          sizes: ['P', 'M', 'G'],
          picture: 'https://imgcentauro-a.akamaihd.net/900x900/96008401/camisa-do-palmeiras-ii-21-puma-feminina-img.jpg'
        },
      ]
    },
    {
      name: 'Grêmio',
      hostname: 'gremio',
      products: [
        { name: 'Camiseta Masculina', price: 100, sizes: ['P', 'M', 'G'], picture: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQAYMBnpxREu6YR2Wy-fq0qbAfJ4DK9AtWXyhhKGEB_awJulZSgjxGdZ43j7FK2J16l25nnpECTJps&usqp=CAc' },
        { name: 'Camiseta Feminina', price: 100, sizes: ['P', 'M', 'G'], picture: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ6XMeinI4iEQ_WcpCGQ4CSEzaZjKa1_2jt__4wAh9AsVTuXXNS1-K6GrEv45hET_AGHWWkAAtdUQ&usqp=CAc' },
      ]
    }
  ];


  let subdomain = fullUrl.split('.')[0];

  let club = data.find(e => e.hostname === subdomain)
  console.log('CLUUUUB', club)

  if (!club) {
    res.writeHead(302, { // or 301
      Location: "https://www.denis-dev.com",

    });
  }


  return {
    props: {
      club: club
    }
  }
}

export default HandleSubdomain;