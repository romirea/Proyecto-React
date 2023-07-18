import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { useCartContext } from "../../context/CartContext"

const Checkout = () => {
    const {cart, totalCompra} = useCartContext()
    
    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState ({
        nombre: "",
        direccion: "",
        email:""
    })

const handleInputChange = (e) => {
    setValues({
        ...values, 
        [e.target.name]: e.target.value,
    })
}

const handleSubmit = (e) => {
    e.preventDefault()
    if (values.nombre.length === 0){
        alert ("Este campo es obligatorio")
        return
    }
    if (values.direccion.length === 0){
        alert ("Este campo es obligatorio")
        return
    }
    if (values.email.length === 0){
        alert ("Este campo es obligatorio")
        return
    }

    const orden = {
        cliente: values,
        items: cart,
        total: totalCompra(),
        fecha: new Date()
    }

    const ordersRef = collection(db, "orders")

        addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                vaciarCarrito()
            })  
            .catch(err => console.log(err))
    }   

    if (orderId){
        return(
            <div className="container my-5">
                <p>Tu compra se registró bajo el código: <strong>{orderId}</strong></p>

            </div>
        )
    }

    if (cart.length === 0){
        return <Navigate to= "/"/>
    }
    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input 
                value={values.nombre}
                type="text"
                placeholder="Nombre"
                onChange={handleInputChange}
                className="form-control mx-2"
                name="nombre"           
                />
                <input 
                value={values.direccion}
                type="text"
                placeholder="Dirección"
                onChange={handleInputChange}
                className="form-control mx-2"
                name="direccion"
                />
                <input 
                value={values.email}
                type="email"
                placeholder="Email"
                onChange={handleInputChange}
                className="form-control mx-2"
                name="email"
                />
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>

        </div>
    )
}

export default Checkout