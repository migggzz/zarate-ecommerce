import Item from "./Item"

const ItemList = ({ products }) => {
  return (
    <ul className="flex m-10 gap-4 containerProducts">
      {products.map((product) =>(
        <Item key={product.id} product={product}/>
      ))}
    </ul>
  )
}
export default ItemList;