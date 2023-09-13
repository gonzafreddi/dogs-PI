import styles from "./card.module.css"
import { useNavigate } from "react-router-dom"
export default function Card(props){
const navigate = useNavigate()
    const handleClick=()=>{
        console.log("click")
        navigate(`/detail/${props.name}`)
    }

    return(<div className={styles.conteiner}>
         <div className={styles.card}> 
         <img src={props.image} />
         <div className={styles.info}>
        <div>
        <h1>{props.name}</h1>
        <p>{props.temperament}</p>
        <p>Peso: {props.weight}</p>
        <button onClick={handleClick}>detalles</button>
        </div>
       
         </div>
        </div>
    </div>)
}