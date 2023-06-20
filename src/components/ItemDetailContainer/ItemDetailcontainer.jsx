// import { useState } from 'react'
// import { useEffect } from 'react'
// import { pedirDatos } from '../../Helpers/PedirDatos'
// // import ItemListContainer from "../../styles/components/ItemListContainer"
// import { useParams } from 'react-router-dom'
// import ItemDetail from '../ItemDetail/ItemDetail'


// const ItemDetailContainer = () =>{


//     const [item, setItem] = useState([])
    
//     const [loading, setloading] = useState(true)
    
//     const {itemId} = useParams()
//     console.log(item)
//     console.log(itemId)
    


//     useEffect(() => {
//         setloading(true)
//                 pedirDatos()
//                     .then((res) => {
//                         setItem(res.find((prod) => prod.id === Number(itemId)))
//                     })
//                     .catch((error) => {console.log(error)})
//                     }, [ItemId])

//             return (
//                     <div className="container my-5">
//                         {

//                             loading
//                             ? <h2>Cargando...</h2>
//                             : <ItemDetail {...item} />
//                         }
//                     </div>
//                     )
//                 }

// export default ItemDetailContainer



import { useState, useEffect } from 'react'
import { pedirDatos } from '../../Helpers/PedirDatos'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    console.log(item)
    console.log(itemId)


    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setItem(res.find((prod) => prod.id === Number(itemId)))
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [itemId])

    return (
        <div className="container my-5">
           {
            loading 
                ? <h2>Cargando...</h2>
                : <ItemDetail {...item}/>
           }
        </div>
    )
}

export default ItemDetailContainer