const ItemDetail = ({ item }) =>{
    return (
        <div>
            <div >{item.name}</div>
            <img src={item.img} className="w-48 h-48"/>
            <p>{item.description}</p>
        </div>
    );
};

export default ItemDetail;