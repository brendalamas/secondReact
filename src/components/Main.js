import "../styles/Main.css";
import Card from "./Card";

const Main = ()=>{
    return (
        <main className="main">
            <h1> Bienvenidas a REACT</h1>
            <div className="tarjetas">
                <Card 
                nombre="rita" 
                imagen="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5937e90a5bafe882f5bc09e6/gatitos-cesta_0.jpg" 
                />

                <Card 
                nombre="trufa"
                imagen="https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg"
                />

                <Card 
                nombre="misha"
                imagen="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5937e90a5bafe882f5bc09e6/gatitos-cesta_0.jpg"
                />
            </div>

        </main>
    )
}

export default Main;