import Product from "./Product"


const ShoppingList = (props) => {
const {shopping,removeFromShoppingList} = props
  
return (
    <>
      <h2 className="mb-3 h4">Produits à acheter ({shopping.length}):</h2>
      <ul className="list-group mb-3 shadow">
        {shopping.map((el) => {
          return (
            <li className="list-group-item" key={el}>
              <Product product={el}
              removeFromShoppingList={removeFromShoppingList} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ShoppingList