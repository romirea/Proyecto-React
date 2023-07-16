// importar componentes//
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Container from "./components/Container/Container"
import { ItemCount } from "./components/ItemCount/ItemCount"
import Contacto from "./components/Contacto/Contacto"
import Nosotros from "./components/Nosotros/Nosotros"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailcontainer"
import { CartProvider } from "./context/CartContext"


//importar estilos y otros
import "./styles/styles.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'tailwindcss/tailwind.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Component } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./context/CartContext"
import Cart from "./components/Cart/Cart"
import Error404 from "./components/Error404/Error404"
import Login from "./components/Auth/Login"
import Ejemplo from "./components/Prueba/Prueba"


function App(){

  return (
    <CartProvider>
      <BrowserRouter>

        <NavBar />
    
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />}/>
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/ejemplo" element={<Ejemplo />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={ <Error404 />}/>
          {/* <Login></Login> */}
          {/* {
            logeado && <>
            <Route path="/miPerfil" element={ <miPerfil />}/>

            </>
          } */}
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </CartProvider>
)
}

export default App


//BOTON ITEMCOUNT
{/* <ItemCount></ItemCount> */}


//EJEMPLO DE USO CHILDREN

{/* <Container>Algo escrito</Container>  */}