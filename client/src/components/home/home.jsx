import Cards from "../Cards/Cards";
import Footer from "../footer/footer";
import Nav from "../nav/nav";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllDogs } from "../../redux/action/action";

import styles from "./home.module.css"
export default function Home({nextHandler, prevHandler, currentItem, currentPage, pages}){
const dispatch = useDispatch()

useEffect(()=>{

dispatch(getAllDogs())
},[])
    
    return(<div className={styles.conteiner}>
      
      <div className={styles.cards}> 
       <Cards
         nextHandler={nextHandler}
         prevHandler={prevHandler}
         currentItem={currentItem}
         currentPage={currentPage}
         pages={pages}
      
      
      /></div>

    </div>)
}