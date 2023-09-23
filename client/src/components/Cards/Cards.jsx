import { useSelector } from "react-redux"
import Card from "../card/card"
import styles from "./cards.module.css"
import { useState } from "react"
import Pagination from "../pagination/Pagination"
import Nav from "../nav/nav"
import { useEffect } from "react"
export default function Cards({nextHandler, prevHandler, currentItem, currentPage, pages}) {



    return (<>
    
      <div className={styles.contenedor}>
            
        
            <div className={styles.divConteiner}>
            {        currentItem?.map((d) => (
                     <Card
                         key={d.id}
                         name={d.name}
                         image={d.image}
                         weight={d.weight}
                         pesoMin={d.pesoMin}
                         pesoMax={d.pesoMax}
                        temperaments={d.temperaments}
                         temperament={d.temperament}
                     />
                 ))
             } </div>
               <div className={styles.page}>
                 <Pagination pages={pages} prevHandler={prevHandler} nextHandler={nextHandler} currentPage={currentPage}/>
                 </div>
           
         </div>
    
    </>
    )
}



//   const dogs = useSelector((state) => state.dogs)
  
  //   const itemsPerPage = 8
  //   const pages = dogs.length / itemsPerPage
  //   const [currentPage, setCurrentPage]= useState(1)
    
  //    // Calcular el índice inicial y final para los elementos en la página actual
  //   const indexOfLastItem = currentPage * itemsPerPage; // ultimo indice
  //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;// primer indice
  //   const currentItem = dogs.slice(indexOfFirstItem, indexOfLastItem)
     

  //  const nextHandler=()=>{
  //   if(currentPage === Math.ceil(pages)) return
  //   setCurrentPage(currentPage + 1)
  //   }
  //  const prevHandler=()=>{
  //   console.log("prev")
  //   if(currentPage === 1)return
  //   setCurrentPage(currentPage - 1)
  //  }