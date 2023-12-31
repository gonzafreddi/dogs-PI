import axios from "axios"
import { GET_ALL_DOGS , GET_BY_NAME, GET_TEMPERAMENTS, FILTER_TEMPERAMENT, ORDER_BY_NAME, OREDE_BY_WEIGHT, GET_DETAIL_API, GET_DETAIL_DB, GET_ORIGIN_API, GET_ORIGIN_DB, RESET_FILTER} from "./action_types"

axios.defaults.baseURL = "https://dogs-pi-production-af12.up.railway.app/";

export const getAllDogs = ()=>{
return async(dispatch)=>{
    try {
      
        const getDogs = await axios("/breed/get/all")
        return dispatch({
            type: GET_ALL_DOGS, 
            payload: getDogs.data
        })
    } catch (error) {
        return error.message
    }
}
}

export const getByName =(name)=>{
    if(name){
        return async(dispatch)=>{
            try {
                const  response  = await axios.get(`/breed/search/name?name=${name}`);
                console.log("log del action", response.data)
                return dispatch({
                    type: GET_BY_NAME,
                    payload: response.data
                }); 
            } catch (error) {
                return (error.message)
            }
        }

    }else return
  
}

export const getTemperaments = ()=>{
    return async(dispatch)=>{
        try {
           
            const response = await axios("/temp")
            console.log(response)
            return dispatch({
                type: GET_TEMPERAMENTS,
                payload: response.data
            })
        } catch (error) {
            return (error.message)
        }
    }
}

export const filterTemperament=(filter)=>{
    return{
        type: FILTER_TEMPERAMENT, 
        payload: filter
    }
}

export const orderLetra=(order)=>{
    return{
        type: ORDER_BY_NAME,
        payload: order
    }

}

export const orderWheight=(order)=>{
return {
    type: OREDE_BY_WEIGHT,
    payload: order
}
}

export function postDog(payload) {
    return async function (dispatch) {
       try {
        const response = await axios.post('/breed/create', payload);
        return response
       } catch (error) {
        return error.message
       }
    }
}

export const getDogDetail=(name)=>{
return async function (dispatch){
    try {
     
        const response = await axios(`/breed/search/name?name=${name}`)
        if(Array.isArray(response.data)){
            return dispatch({
                type: GET_DETAIL_API,
                payload: response.data[0]
            })
        }else{
            return dispatch({
                type: GET_DETAIL_DB,
                payload: response.data
            })
        }
      
    } catch (error) {
        error.message
    }
}
}
export const resetFilter = ()=>{
    return{
        type: RESET_FILTER,
    }
}
export const getOriginAction = (origin)=>{
    return async function (dispatch){
        try {
            const urlApi = "/breed"
            const urlDb  = "/breed/api/db"
            if(origin === "api"){
                let responseApi = await axios(urlApi)
                console.log("api action")
                return dispatch(
                    {
                        type: GET_ORIGIN_API,
                        payload: responseApi.data
                    }
                )
            }else{
                let response = await axios(urlDb)
                return dispatch(
                    {
                        type: GET_ORIGIN_DB,
                        payload: response.data
                    }
                )
            }
        } catch (error) {   
            error.message
        }
    }
}
