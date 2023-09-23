import styles from "./card.module.css"
import { useNavigate } from "react-router-dom"
export default function Card(props){
const navigate = useNavigate()
const dog = props
    const handleClick=()=>{
      
        navigate(`/detail/${props.name}`)
    }

    return(<div className={styles.conteiner}>
         <div className={styles.card}> 
         <img src={props.image} />
         <div className={styles.info}>
        <div>
        <h1>{props.name}</h1>
        <p>{props.temperament} {dog.temperaments?.map(e=> e.name).join(", ")}</p>
        <p>Peso: {props.weight} {dog.pesoMin} {dog.pesoMax}</p>
        <button onClick={handleClick}>detalles</button>
        </div>
         </div>
        </div>
    </div>)
}