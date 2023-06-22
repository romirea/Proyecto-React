
import { useState, useEffect } from 'react'
import { pedirDatos } from '../../Helpers/PedirDatos'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { ItemId } = useParams()
    console.log(item)
    console.log(ItemId)


    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setItem(res.find((prod) => prod.id === Number(ItemId)))
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [ItemId])

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