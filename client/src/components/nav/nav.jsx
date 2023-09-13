import { SearchBar } from "../search bar/searchNar";
import styles from "./nav.module.css"
import FileterTemperaments from "../filtros/filterByTemperaments";
import { NavLink} from "react-router-dom";

export default function Nav({onSearch}){
    return(<div className={styles.conteiner}>
        <div className={styles.title}>
        <i class="fa-solid fa-dog"></i>    
        <h2>DoggoConnect</h2></div>
      
      <div className={styles.btnCont}>
     <NavLink className={styles.buttons} to={"/home"}> <p >Home</p></NavLink>
       <NavLink to={"/create"}className={styles.buttons}><p >Create</p></NavLink></div>
        <FileterTemperaments/>
        <SearchBar onSearch={onSearch}/>
        
    </div>)
}