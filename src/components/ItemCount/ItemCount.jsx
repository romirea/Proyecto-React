// import { useState, useEffect } from "react"


// export const ItemCount = ( {init = 0, step = 1} ) => {
//     const [counter, setCounter] = useState( Number(localStorage.getItem('counter')) || init )

//     const sumar = () => {
//         setCounter(counter + step)
//     }

//     const restar = () => {
//         setCounter(counter - step)
//     }

//     const reset = () => {
//         setCounter(init)
//     }

//     useEffect(() => {
//         localStorage.setItem('counter', counter)
//     }, [counter])

//     return (
//     <div className="container my-5">
//             <div class="btn-group" role="group" aria-label="Basic example">
//                 <button onClick={sumar} className="btn btn-secondary">+</button>
//                 <button type="button" className="btn btn-light">{counter}</button>
//                 <button onClick={restar} className="btn btn-secondary">-</button>
//                 <button className="btn btn-outline-primary">Agregar al Carrito</button>
//                 <button onClick={reset} className="btn btn-outline-secondary">Vaciar Carrito</button>
// </div>
// </div>
//     )
// }

//pendientes: 
//configurar carrito para que no pueda cargarse más del stock disponible
//agregar carrito --> carga a compra y vacía el carrito + aviso de compra realizada



export const ItemCount = ({ max, cantidad, setCantidad, handleAgregar }) => {

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const darkMode = true

    return (
        <div>
            <button 
                onClick={handleRestar} 
                className={`btn ${darkMode ? "boton-dark" : ''} ${cantidad === 1 ? "btn-outline-danger": "btn-outline-primary"}`}
                disabled={cantidad === 1}
            >
                -
            </button>

            <span className="mx-3">{cantidad}</span>
            <button 
                onClick={handleSumar} 
                className={cantidad === max ? "btn btn-danger" : "btn btn-primary"}
                disabled={cantidad === max}

            >
                +
            </button>
            <br/>
            <button onClick={handleAgregar} className="btn btn-success my-2">Agregar al carrito</button>
        </div>
    )
}

