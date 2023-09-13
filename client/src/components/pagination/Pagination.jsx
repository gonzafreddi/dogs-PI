import { useState } from "react"
import { useSelector } from "react-redux"
import styles from "./pagination.module.css"

export default function({prevHandler, nextHandler, currentPage, pages}){
 
    

   return(<div className={styles.conteiner}>
          <button onClick={prevHandler}>{"< "} Prev</button>
          <p className={styles.pages}>{currentPage} of {Math.ceil(pages)}</p>
          <button onClick={nextHandler}>Next  {" >"}</button>
    </div>)
}

// nummero de pagina => currentPage
// item por pagina = 8
//---------- NextHandler---------------------
//
// ---------PrevHandler----------------------
