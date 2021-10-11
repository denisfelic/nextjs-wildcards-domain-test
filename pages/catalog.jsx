import HandleSubdomain from "../Helpers/HandleSubdomain";

export default function Catalog(props) {
  return (
    <div>Catalogo - {props.fullUrl}</div>
  )
}

export async function getServerSideProps(ctx) {
  return HandleSubdomain(ctx);
}