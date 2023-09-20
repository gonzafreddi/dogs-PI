import Card from "../card/card";
import { useSelector } from "react-redux";
import styles from "../Cards/cards.module.css";
import Pagination from "../pagination/Pagination"
import { useState } from "react";
import NotSearch from "./notseach";

export default function Search() {
  const searchDog = useSelector((state) => state.searchDog);
  console.log(searchDog);

  
  const itemsPerPage = 8
  const pages = searchDog.length / itemsPerPage
  const [currentPage, setCurrentPage]= useState(1)
  
   // Calcular el índice inicial y final para los elementos en la página actual
  const indexOfLastItem = currentPage * itemsPerPage; // ultimo indice
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;// primer indice
  const currentItem = searchDog.slice(indexOfFirstItem, indexOfLastItem)
   

 const nextHandler=()=>{
  if(currentPage === Math.ceil(pages)) return
  setCurrentPage(currentPage + 1)
  }
 const prevHandler=()=>{
  console.log("prev")
  if(currentPage === 1)return
  setCurrentPage(currentPage - 1)
 }

  let contentToRender;
  let notFound;
  // pregunto si el back en su respuesta me devuelve esto es q no econtron el perro y sino renderizo la card y mapeo hasta el anteultimo elemento pq el ultimo me llega en null
  if(searchDog === "perro no encontrado"){
    notFound = (<div><NotSearch/></div>)
  }else{
    contentToRender = currentItem?.map((d) => (
      <Card
      key={d?.id}
      name={d?.name}
      image={d?.image}
      weight={d?.weight}
      pesoMin={d?.pesoMin}
      pesoMax={d?.pesoMax}
     temperaments={d?.temperaments}
      temperament={d?.temperament}
      />
    ));
  }
 

console.log(currentItem);

  return (
    <div className={styles.contenedor}>
      <div className={styles.divConteiner}>

  
        {contentToRender}
        {notFound}

       
           
      </div>
      <div className={styles.pag}>
        <Pagination pages={pages} prevHandler={prevHandler} nextHandler={nextHandler} currentPage={currentPage}/>
        </div>
    </div>
  );
}
