import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'


const ItemListContainer = () =>{


    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    console.log(productos)

    const {categoryId} = useParams()    


    useEffect(() => {
        setLoading(true)
        setLoading(true)

        const productosRef = collection(db, "productos")
        const q = categoryId
            ? query(productosRef, where("category", "==", categoryId))
            : productosRef

        getDocs(q)
            .then((resp) => {
                const items = resp.docs.map((doc) => ({...doc.data(), id: doc.id}))
                setProductos(items)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

    }, [categoryId])

            return (
                    <div className="container my-5">
                        <ItemList items={productos}/>
                    </div>
                    )
                }

export default ItemListContainer



