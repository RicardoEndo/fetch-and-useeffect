import "./style.css";

export function Card({ element }) {
    console.log(element);
    return (
        <div className="containerCard">
            <img src={element.image}></img>
            
            <p>Nome: {element.name}</p>
            <p>Sexo: {element.gender}</p>
            <p>Origem: {element.origin.name}</p>
        </div>
    )


}