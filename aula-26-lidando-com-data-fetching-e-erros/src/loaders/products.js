import products from "../database.json"

function loadProduct({ params }) {
  const product = products.find((p) => p.id === +params.productId)

  if(!product){
    throw new Response("404 NOT FOUND", { status: 404 })
  }

  return product
}
export default loadProduct