import { useState } from "react"
import { postDog } from "../redux/action/action"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import {validate} from "./validate"
import styles from "./form.module.css"
export default function CreateForm(){
    const dispatch = useDispatch()


    const [info, setInfo] = useState({
        name:"",
        temperaments:[],
        image:"", 
        pesoMin:"",
        pesoMax:"",
        altoMin:"",
        altoMaxim:"",
        years: "",
        
    })
    
    const [error, setError] = useState({
        name:"",
        temperaments:[],
        image:"", 
        pesoMin:"",
        pesoMax:"",
        altoMin:"",
        altoMaxim:"",
        years: "",
    })


    const types = useSelector((state)=> state.types)
    
//   const disableFunction = ()=>{
//     let disabledAux = true;
//     for(let err in error){
//       if(error[err]==="") {
//         disabledAux = false
//       }
//       else{
//         disabledAux = true;
//         break;
//       }
//     }
//     return disabledAux;
//   }
  const disableFunction = () => {
    for (let err in error) {
      if (error[err] !== "") {
        return true; // Si al menos un campo tiene un error, deshabilita el botón
      }
    }
    return false; // Habilita el botón si no hay errores en ningún campo
  };
    
    const handleChange = (e)=>{
        if(e.target.name === "temperaments"){
            setInfo({
                ...info,
                [e.target.name]:[...info[e.target.name], e.target.value]
            })
        }else{
          setInfo({
            ...info, 
            [e.target.name]: e.target.value
        })
        }
        setError(validate({
            ...info,
            [e.target.name]:e.target.value
        }))
       
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        window.alert("creado con exito")
        dispatch(postDog(info))
        console.log(info);
      }
   console.log(error);

    return(<div className={styles.conteiner}>

        <div className={styles.title}>
        <i class="fa-solid fa-dog"></i>
        <p>DoggoConnect</p>
        </div>
       <div className={styles.form_conteiner}>
       
       <form  onSubmit={handleSubmit}>
      
       <h1 >Create a new dog </h1>
            <label htmlFor="">Name</label>
            <span>{error.name}</span>
            <input  onChange={handleChange} name="name" type="text" placeholder="Name" />
            <span>{error.altoMin}</span>
            <label >Heigth min</label>
            <input onChange={handleChange}  name="altoMin" type="text" />
            <span>{error.altoMaxim}</span>
            <label >Heigth max</label>
            <input name="altoMaxim" onChange={handleChange}  type="text" />
             
            <span>{error.pesoMax}</span>
            <label  htmlFor="">Weight max</label>
            <input name="pesoMax" onChange={handleChange}  type="text" />
            <span>{error.pesoMin}</span>
            <label htmlFor="">Weigth min</label>
            <input  name="pesoMin"  onChange={handleChange}  type="text" />

             <label >temperamento</label>
             <select onChange={handleChange}  name="temperaments">
             {types?.map((type, index) =>
                        <option key={index} value={type}>{type}</option>
             )}  
            </select>   
            <div>  
            {
                info.temperaments?.map((e,index)=> <div key={index}>{e}</div>)
             }
                </div>
            <span>{error.years}</span>         
            <label htmlFor="">Years</label>
            <input   onChange={handleChange} type="text" name="years" />
            
            <span>{error.image}</span>
            <label htmlFor="">image</label>
            <input  name="image"  onChange={handleChange}  type="text" />
          <input disabled={disableFunction()}className={styles.sendButton} type="submit"/> 
           
            
        </form>
       </div>
    </div>)
}