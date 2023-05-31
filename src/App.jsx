
// importar componentes//
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import "./styles/styles.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){

  return(
      <div>
        <NavBar/>
        <ItemListContainer greeting= "Eleva tu hogar."/> 
      </div>
      
  )
}

export default App