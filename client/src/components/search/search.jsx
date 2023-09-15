import Card from "../card/card";
import { useSelector } from "react-redux";
import styles from "../Cards/cards.module.css";
import Pagination from "../pagination/Pagination"
import { useState } from "react";

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
  if(searchDog === "perro no encontrado"){
    notFound = (<div><h1>Perro no encontrado</h1></div>)
    console.log(searchDog,"segundo log");}
 
   else{
    contentToRender = currentItem?.map((d) => (
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
    ));
  }


  return (
    <div className={styles.contenedor}>
      <div className={styles.divConteiner}>

  
        {contentToRender}
        {notFound}

        <div>
        <Pagination pages={pages} prevHandler={prevHandler} nextHandler={nextHandler} currentPage={currentPage}/>
        </div>
           
      </div>
    </div>
  );
}
