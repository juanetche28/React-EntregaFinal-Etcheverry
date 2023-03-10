import React, { useState, useContext } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore";

const Checkout = () => {
    const {cart, clear, sumTotal, cartTotal} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer: {name:nombre, email:email, phone:telefono},
            items: cart.map(item => ({id:item.id, title:item.nombre, price:item.precio, quantity:item.quantity, price_total:item.quantity * item.precio})),
            date: `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
            total: sumTotal(),
            quantity: cartTotal()
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
            const orderDoc = doc(db, "orders", snapShot.id); //Buscamos por ID el documento
            updateDoc(orderDoc, {total: order.total * 1}); //Actualizamos el importe total del documento con descuento (Yo lo dejo en 1, no hay descuento)
            clear();
        });
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col">
                    <form>
                        <div class="mb-3">
                            <label for="nombre" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="nombre" placeholder="Ingrese su Nombre" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="text" class="form-control" id="email" placeholder="Ingrese su Email" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div class="mb-3">
                            <label for="telefono" class="form-label">Tel??fono</label>
                            <input type="text" class="form-control" id="telefono" placeholder="Ingrese su Tel??fono" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" onClick={generarOrden} class="btn fondoNaranja">Generar Orden</button>
                    </form>
                </div>
                <div className="col">
                    <table class="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={64} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">${item.quantity * item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3} className="text-end"><b>Total a Pagar</b></td>
                                <td className="text-center"><b>${sumTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div class="alert alert-success" role="alert">
                        <h1>Felicitaciones!</h1>
                        <p>Tu N??mero de Orden es: {orderId}</p>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;