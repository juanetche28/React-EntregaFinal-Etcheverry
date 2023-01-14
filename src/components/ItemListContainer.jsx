import React, {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import Loading from "./Loading";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true); 
    const {id} = useParams();

    // Consultar la Collection de mis productos
    useEffect(()=> {
        const db = getFirestore();
        const itemsCollection = collection(db, "Items");
    // Filtro 
    const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;   
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})))
            setLoading(false); 
        });
    }, [id]);

    return (
        <div className="container py-5">
            {loading ? <Loading/>: <ItemList items={items}/>}
        </div>
    )
}

export default ItemListContainer;