import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <Link to={"/item/" + item.id}>
            <div className="card mb-3 fondoBody">
                <img src={item.imagen} className="card-img-top" alt={item.nombre}/>
                <div className="card-body text-center">
                    <p className="card-text"><b>{item.nombre}</b></p>
                </div>
            </div>
        </Link>
    )
}

export default Item;
