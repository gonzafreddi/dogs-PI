import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/action/action";
import { useNavigate } from "react-router-dom";

import styles from "./search.module.css"
export function SearchBar(){
    const [name , setName] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) =>{
       const newName = e.target.value
       setName(newName)
       console.log(newName)
    } 

    const onSearch = ()=>{
        console.log(name);
        dispatch(getByName(name))
        navigate("/search")
    }
  

return(<div className={styles.cont}>
       
        <input value={name} onChange={handleChange} type="search" />
        <button onClick={()=>{onSearch()}}>Buscar</button>
        
   
        
    </div>)
}