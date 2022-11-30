const Items = ({product}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <p className="text-4xl ml-24">{product.price}</p>
      <figure className="px-10 pt-10">
        <img src={product.img} alt="product" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>  
    </div>
  )
}
export default Items