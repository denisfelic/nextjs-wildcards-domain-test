import HandleSubdomain from "../Helpers/HandleSubdomain";
import Head from 'next/head';


async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

const Home = ({ club }) => {
  return (
    <div >
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      </Head>
      {club ? <DomainPage club={club} /> : <Institutional />}
    </div>
  )
}
function Institutional() {
  return <h1>Institutional Page!</h1>
}
function DomainPage({ club }) {

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

export async function getServerSideProps(ctx) {
  return HandleSubdomain(ctx);
}

export default Home
