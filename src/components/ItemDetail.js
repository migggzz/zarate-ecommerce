import itemCount from "./itemCount";

const ItemDetail = ({ item }) =>{
    return (
        <div>
            <div >{item.name}</div>
            <img src={item.img} className="w-48 h-48"/>
            <p>{item.title}</p>
            <p>{item.description}</p>
        </div>
    );
};

export default ItemDetail;