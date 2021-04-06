import Product from "./Product"


const ShoppingList = (props) => {
const {shopping}=props
  return (
    <>
      <h2 className="mb-3 h4">Produits à acheter ({shopping.length}):</h2>
      <ul className="list-group mb-3 shadow">
        {shopping.map((product) => {
          return (
            <li className="list-group-item" key={el}>
              <Product product={product} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ShoppingList