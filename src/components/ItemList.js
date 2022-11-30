import Items from "./Items"

const ItemList = ({ products }) => {
  return (
    <ul className="flex m-10 gap-4">
      {products.map((product) =>(
        <Items key={product.id} product={product}/>
      ))}
    </ul>
  )
}
export default ItemList;