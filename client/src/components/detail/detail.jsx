import { useParams } from "react-router-dom"
import axios from "axios"
import {useSelector } from "react-redux/";
import styles from "./detail.module.css"
import { useDispatch } from "react-redux/";
import { useEffect, useState } from "react";
import { getDogDetail } from "../../redux/action/action";
export default function Detail(){
  const {name} = useParams()
  const dispatch = useDispatch()
  const dogDetail = useSelector((state)=>state.dogDetail)
    // const [dog, setDog] = useState()
    
    // let url = `http://localhost:3001/breed/search/name?name=${name}`
    // console.log(name);

    // const response = async ()=>{
    //   let info = await axios(url)
    //   console.log(info)
    //   if(info.data){
    //     setDog(info)
    //   }
    //   if(Array.isArray(info.data)){
    //     setDog(info.data[0])
    //   }
    //   console.log(dog);
     
    // }
  
    
    useEffect(()=>{
      dispatch(getDogDetail(name))
      return ()=>{
        dispatch(getDogDetail())
      }
    },[name])
   
    return (
        <div className={styles.conteiner}>
        
          {dogDetail?.height? (
            <>
                <div className={styles.dogimage}>  <img src={dogDetail.image} alt="" /></div>
              
              <div className={styles.infoConteiner}>
              
              <div className={styles.positionInfo}>
              <div className={styles.title}><h1>{dogDetail.name}</h1></div>
              <h4>ID: {dogDetail.id}</h4>
              <p>Breed Group:{dogDetail?.breed_group}</p>
              <p>Temperment: {dogDetail.temperament}</p>
              <p>Life: {dogDetail.life_span}</p>
              <p>Height: {dogDetail.height}</p>
              <p>Weight: {dogDetail.weight}</p>
              </div>
            
          

              </div>
            </>
                                                                                                                             
          ) : dogDetail?.pesoMin? (
            <>
            <div className={styles.dogimage}><img src={dogDetail.image} alt="" /></div>
          <div  className={styles.infoConteiner}>
         
         <div className={styles.positionInfo}>
         <h1 className={styles.title} >{dogDetail.name}</h1>
            <h4>{dogDetail.id}</h4>
            <p>Temperaments: {dogDetail.temperaments[0].name}</p>
            <p>Life: {dogDetail.years}</p>
            <p>Height: {dogDetail.altoMaxim}-{dogDetail.altoMin}</p>
            <p>Weight: {dogDetail.pesoMin}-{dogDetail.pesoMax}</p>
         </div>

          </div>
            
            </>
            
            ):(
            <p>cargando...</p>
          )}
        </div>
      );
    }
