import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore} from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

// Se consulta a Firestore    
    useEffect(() => {
        const db = getFirestore(); 
        const documento = doc(db, "Items", id);
        getDoc(documento).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
                setLoading(false);
            } else {
                console.log("Error! No se encontrĂ³ el Documento Firestore!");
            }
        });
    }, []);


    return (
        <div className="container">
            {loading ? <Loading /> : <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer;