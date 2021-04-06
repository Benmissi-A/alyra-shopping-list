import ShoppingList from "./ShoppingList"
import AddPopularProducts from "./AddPopularProducts"
import AddProductForm from "./AddProductForm"
import { useState } from 'react'

const shoppingApp = () => {
    const [shopping, setShopping] = useState(["cumin", "curry","café"])
    const addToShoppingList = (product) => {
      setShopping([...shopping,product])
    }
    const removeToShoppingList = (product) => {
      setShopping(shopping.filter(el => el !==product))
    }

  return(
    <main className="row">
      <section className="col-lg-8">
        <ShoppingList shopping={shopping}/>
      </section>
      <section className="col-lg-4">
        <div className="bg-light border p-4">
          <h2 className="mb-3 h4">Ajouter un produit :</h2>
          <AddProductForm 
            shopping={shopping}
            addToShoppingList={addToShoppingList}
            removeToShoppingList={removeToShoppingList} />
          <AddPopularProducts />
        </div>
      </section>
    </main>
  )
}
export default shoppingApp