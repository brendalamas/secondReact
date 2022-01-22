import "../styles/Card.css"

const Card =(props)=>{
    // parametros de un componente se llaman PROPS
    //recibe 1 solo parametro, y es un OBJETO 
    console.log(props);
    console.log(props.nombre);
    console.log(props.imagen);

    return (
        <article className="card">
            <h2>{props.nombre}</h2>
            <img src= {props.imagen}/>

        </article>
    )
}

export default Card;