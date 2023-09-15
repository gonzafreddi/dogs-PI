import { GET_ALL_DOGS, GET_BY_NAME, GET_TEMPERAMENTS, FILTER_TEMPERAMENT, ORDER_BY_NAME, OREDE_BY_WEIGHT, GET_DETAIL_DB, GET_DETAIL_API,  GET_ORIGIN_API, GET_ORIGIN_DB, RESET_FILTER} from "../action/action_types";

let initialState = {
    dogs:[],
    allDogs:[],
    searchDog:[],
    types:[],
    dogDetail:[]
}

const reducer = (state=initialState, action)=>{
    
    switch (action.type) {
        case GET_ALL_DOGS:
            return{
                ...state, 
                dogs: action.payload,
                allDogs: action.payload
            }
         case GET_BY_NAME:
            return{
                ...state, 
                searchDog:action.payload

            }
         case GET_TEMPERAMENTS:
            return{
                ...state,
                types: action.payload
            }
        case FILTER_TEMPERAMENT:
            let copy = state.allDogs
            let filterTemp = action.payload === "all" ? copy : state.allDogs.filter((e) => e.temperament?.includes(action.payload))
            console.log(filterTemp)
            return{
                ...state,
                dogs: filterTemp
            }
        case ORDER_BY_NAME:
            let order = [...state.dogs]

            order.sort((a,b)=>{
                if(action.payload === "acd"){
                    //menor a mayor 
                   console.log("acendente");
                    if(a.name> b.name) return 1
                    if(a.name< b.name) return -1
                    return 0;
                }else{
                    console.log("ordenando donde si anda");
                    if(a.name > b.name) return -1
                    if(a.name < b.name) return 1
                    return 0
                }
        
            })
            return{
                ...state,
                dogs: order
            }

            case OREDE_BY_WEIGHT:
                let orderWeight = [...state.dogs]

                orderWeight.sort((a,b)=>{
                        let weightA = parseFloat(a.weight);
                        let weightB = parseFloat(b.weight);
                    if(action.payload === "menor"){
                        console.log("menor organizado");
                        
                        if(weightA > weightB ) return 1
                        if(weightA < weightB ) return -1
                        return 0
                    }else{
                        console.log("mayor");
                        if(weightA > weightB ) return -1
                        if(weightA < weightB ) return 1
                        return 0
                    }
                })
            return{
                ...state,
                dogs: orderWeight
            }
            case GET_DETAIL_API:
                console.log("detasil de la api")
                return{
                    ...state,
                    dogDetail: action.payload
                }
            case GET_DETAIL_DB:
                console.log("entre en el detail de la database");
                return{
                    ...state,
                    dogDetail: action.payload
                }
            case GET_ORIGIN_API:
                return{
                    ...state,
                    dogs: action.payload
                }
            case GET_ORIGIN_DB:
                return{
                    ...state,
                    dogs: action.payload
                }
            case RESET_FILTER:
                return{
                    ...state,
                    dogs: state.allDogs
                }
        default:
            return state
    }
}




export default reducer;