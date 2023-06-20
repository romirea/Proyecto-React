import { useState } from 'react'
import { useEffect } from 'react'
import { pedirDatos } from '../../Helpers/PedirDatos'
// import ItemListContainer from "../../styles/components/ItemListContainer"
import "../../components/ItemListContainer/ItemListContainer"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) =>{


    const [productos, setProductos] = useState([])

    const {categoryId} = useParams()
    console.log(categoryId)
    


    useEffect(() => {
                pedirDatos()
                    .then((res) => {
                        if(!categoryId) {
                            setProductos(res)
                        } else {
                            setProductos( res.filter((item) => item.category === categoryId) )
                        }
                    })
                    .catch((error) => {console.log(error)})
                    }, [categoryId])

            return (
                    <div className="container my-5">
                        <ItemList items={productos}/>
                    </div>
                    )
                }

export default ItemListContainer





//ELIMINADO, ANTERIOR:
//     return(
//         <div className="list_container">
//             <h2>RS Home</h2>
//             <p>{greeting}</p>
//         </div>
//     )
// }