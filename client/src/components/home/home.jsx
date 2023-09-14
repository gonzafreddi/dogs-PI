import Cards from "../Cards/Cards";
import Footer from "../footer/footer";
import Nav from "../nav/nav";

import styles from "./home.module.css"
export default function Home(){
    
    return(<div className={styles.conteiner}>
      
      <div className={styles.cards}>  <Cards/></div>

    </div>)
}