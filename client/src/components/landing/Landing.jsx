import { useNavigate } from "react-router-dom";
import styles from "./landing.module.css"
import miImage from "./imgbin_dogs-png.png"
export default function Landing() {
    const navigate = useNavigate();

    const handleIngresarClick = () => {
        navigate("/home");
    };

    return (
        <div className={styles.conteiner}>
            
       <div className={styles.hijo}>
       <div className={styles.title}>
        <i class="fa-solid fa-dog"></i>
        <h1>DoggoConnect</h1>
        
        </div>
        <p>
        ¡DoggoConnect es tu destino para explorar el mundo de las razas de perros!
         Encuentra detalles sobre el origen, apariencia, temperamento y cuidados de diversas razas 
         caninas. Desde perros de trabajo hasta compañeros de hogar, conoce a estos fieles amigos en DoggoConnect.
        </p>
            <div className={styles.button}><button onClick={handleIngresarClick}>Ingresar</button></div>
       </div>
       {/* <div className={styles.image}><img src={miImage} alt="" /></div> */}
        </div>
    );
}
