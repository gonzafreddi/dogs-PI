import './App.css';
import { Routes, Route, useNavigate  } from 'react-router-dom'; 
import Landing from './components/landing/Landing';
import Home from './components/home/home';
import { useEffect, useState} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { getAllDogs, getTemperaments } from './redux/action/action';
import { useLocation} from 'react-router-dom';
import Nav from './components/nav/nav';
import Search from './components/search/search';
import CreateForm from './form/CreateForm';
import axios from 'axios';
import Detail from './components/detail/detail';
import Footer from './components/footer/footer';
function App() {
  const dispatch = useDispatch()
  const location = useLocation()  
  const navigate = useNavigate()



  useEffect( ()=>{
    dispatch(getAllDogs())
    dispatch(getTemperaments())
    console.log("disparch de la app")
  }, [])


  return (
    <div className="App">
      {location.pathname !== "/" && <Nav/>}
  
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/create' element={<CreateForm/>}/>
        <Route path='/detail/:name' element={<Detail/>}/>
      </Routes>
      {location.pathname !== "/" && <Footer/>}
    </div>
  );
}

export default App;





//   const onSearch = async (name)=>{
//     try {
//     const url = `http://localhost:3001/breed/search/name?name=${name}` 
//     const response = await axios(url)
//     console.log(`log del nombre en onsearch`, response.data);
//     if(response.data.name){
//       setFindDog(response.data)
//       navigate("/search")
//     }
    
    
//     console.log(findDog);
//     } catch (error) {
//         console.error("Error en la búsqueda:",name, error.message), alert("perro no encontrado")
//     }
// }


