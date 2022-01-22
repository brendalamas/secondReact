import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";




const App = ()=>{
  return (
    <div className="contenedor">
      <Nav/>
      <Main/>

      <Button
      color="rojo"
      mensaje="Hola"
      />

      <Button
      color="azul"
      mensaje="Hola"
      />

      <Button
      color="verde"
      mensaje="Hola"
      />

      <Footer/>
    </div>
  )
}


export default App;