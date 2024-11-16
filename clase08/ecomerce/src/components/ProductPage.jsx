import Card from "./Card"
const ProductPage = () => {
  return (
    <>
      <Card>
        <h2>Produto Destacado</h2>
        <p>Este es el producto destacado del mes</p>
      </Card>
      <Card>
        <h3>Te esperamos en nuestra tienda</h3>
        <img width={150} height={150} src="https://media.gq.com.mx/photos/601047f419128da7b9d1b9c2/16:9/w_2560%2Cc_limit/Los%2520Simpson%2520-%2520GQ.jpg" />
      </Card>
{/*   
    <Card>
        <ComponentePersonalizado />
    </Card> */}
    </>
  );
}

export default ProductPage
