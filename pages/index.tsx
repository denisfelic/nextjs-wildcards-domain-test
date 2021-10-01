import type { NextPage } from 'next'

const Home: NextPage = ({ fullUrl }: any) => {

  const data = [
    {
      name: 'Sociedade Esportiva Palmeiras',
      hostname: 'palmeiras',
      products: [
        { name: 'Camiseta Masculina', price: 129.99, sizes: ['P', 'M', 'G'], picture: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQXpfZVRMnfAczBuyc-cp-FoeGSZ9VetOqmpVCwPir8NU5P2s_1rxaFZPXq02azleifO7QPoa8mfXg&usqp=CAc' },
        { name: 'Camiseta Feminina', price: 129.99, sizes: ['P', 'M', 'G'], picture: 'https://imgcentauro-a.akamaihd.net/900x900/96008401/camisa-do-palmeiras-ii-21-puma-feminina-img.jpg' },
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


  let subdomain: string = fullUrl.split('.')[0];

  let club = data.find(e => e.hostname === subdomain)
  console.log(club)




  return (
    <div >
      <h1>Bem vindo(a) à loja do {club?.name}</h1>
      <h2>Produtos</h2>
      <ul style={{ display: 'flex' }}>
        {club?.products.map((product, i) =>
          <li key={i}>
            <img style={{ width: 150, height: 250 }} src={product.picture} />
            <div>
              <p>{product.name}</p>
              <strong>R$ {product.price}</strong>
              <div>
                <ul style={{ display: 'flex', width: 150, justifyContent: 'space-between' }}>
                  {product.sizes.map((size, j) => <li key={j}>{size}</li>)}
                </ul>
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
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

export default Home
