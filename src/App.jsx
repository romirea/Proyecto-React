// importar componentes//
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Container from "./components/Container/Container"
import { ItemCount } from "./components/ItemListContainer/ItemCount"
import Contacto from "./components/Contacto/Contacto"
import Nosotros from "./components/Nosotros/Nosotros"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailcontainer"

//importar estilos y otros
import "./styles/styles.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'tailwindcss/tailwind.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Component } from "react"
import { Link } from "react-router-dom"


function App(){

  return(
    <BrowserRouter>
      
        <NavBar/>
    
        
        <Routes>
          <Route path= "/" element={<ItemListContainer/> } />
          <Route path= "/productos/:categoryId" element={<ItemListContainer/> } />
          {/* <Route path= "/item/:Id" element={<ItemDetailContainer/> } /> */}
          <Route path= "/Contacto" element={<Contacto/> } />
          <Route path= "/Nosotros" element={<Nosotros/> } />
          <Route path= "/detail/:ItemId" element={<ItemDetailContainer/> } />
          <Route path= "*" element={<Navigate to ="/"/> } />
      
        </Routes>

      </BrowserRouter>
      
  )
}

export default App


//BOTON ITEMCOUNT
{/* <ItemCount></ItemCount> */}


//EJEMPLO DE USO CHILDREN

{/* <Container>Algo escrito</Container>  */}