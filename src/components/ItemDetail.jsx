import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);
    const onAdd = (quantity) => {
        addItem(item, quantity);
    }


    return (
        <div className="row">
            <div className="col-md-4 offset-md-4 text-center">
                <img src={item.imagen} className="img-fluid BorderImg" alt={item.nombre}/>
                <h1 className="FontDetalleTitulo">{item.nombre}</h1>
                <p className="FontDetalle">{item.descripcion}</p>
                <p>Stock: <b>{item.stock}</b> - Precio Unitario: <b>${item.precio}</b></p>
                <ItemCount stock={item.stock} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail;