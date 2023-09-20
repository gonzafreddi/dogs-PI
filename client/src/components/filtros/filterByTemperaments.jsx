    import {useSelector } from "react-redux"
    import { useState } from "react"
    import styles from "./filtros.module.css"
    import { useDispatch } from "react-redux"
    import { filterTemperament, getOriginAction } from "../../redux/action/action"
    import { orderLetra } from "../../redux/action/action"
    import { orderWheight } from "../../redux/action/action"
    
    export default function FileterTemperaments({nextHandler, prevHandler, currentItem, currentPage, setCurrentPage,pages}){

      


        const types = useSelector((state)=> state.types)
   
        const [selectedType, setSelectedType] = useState('')
        const [order, setOrder] = useState("")
        const [weight, setweight] = useState("")
        const [origin, setOrigin] = useState("")
        const dispatch = useDispatch()

        const handleType = (e) => {
            const selectedValue = e.target.value
            setSelectedType(selectedValue)
            setCurrentPage(1)
            dispatch(filterTemperament(selectedValue))
        }
        const handleOrder = (e)=>{
            const selectedValue = e.target.value
            setOrder(selectedValue)
            dispatch(orderLetra(selectedValue))
         }
        const orderByweight = (e)=>{
            const selectedValue = e.target.value
            setweight(selectedValue)
            dispatch(orderWheight(selectedValue))

        }

        const getOrigin = (e)=>{
            const selectedValue = e.target.value
            setOrigin(selectedValue)
            console.log(selectedValue)
            dispatch(getOriginAction(origin))
        }
        
        return(<div className={styles.cont}>
        <div >
            
        <select placeholder="select" value={selectedType} onChange={handleType}>
        <option value="" disabled selected hidden>Seleccione una raza</option>
         <option selected value="all">all</option>
         {types?.map((type, index) =>
         <option key={index} value={type}>{type}</option>
          )}
       </select>
       </div>

        <div>
          
            <select  value={order} onChange={handleOrder}>
            <option value="" disabled selected hidden>Orden alfabetico</option>
                <option >acd</option>
                <option >dec</option>
            </select>
        </div>

        
        <div>
          
            <select value={origin} onChange={getOrigin}>
            <option value="" disabled selected hidden>Seleccione origen</option>
                <option value={"database"}>api</option>
                <option value={"api"} >database</option>
            </select>
        </div>
        <div>
            <select value={weight} onChange={orderByweight}>
            <option value="" disabled selected hidden>Ordenar por peso</option>
                <option >mayor</option>
                <option >menor</option>
            </select>
        </div>

        </div>)
    }