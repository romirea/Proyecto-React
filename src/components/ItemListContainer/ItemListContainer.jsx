import "../../components/ItemListContainer/ItemListContainer"

const ItemListContainer = ({greeting}) =>{

    return(
        <div className="list_container">
            <h2>RS Home</h2>
            <p>{greeting}</p>
        </div>
    )
}

export default ItemListContainer