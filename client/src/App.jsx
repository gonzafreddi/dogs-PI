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
import CreateForm from './components/form/CreateForm';
import axios from 'axios';
import Detail from './components/detail/detail';
import Footer from './components/footer/footer';
function App() {
  const dispatch = useDispatch()
  const location = useLocation()  
  const navigate = useNavigate()

  const dogs = useSelector((state) => state.dogs)
  
  const itemsPerPage = 8
  const pages = dogs.length / itemsPerPage
  const [currentPage, setCurrentPage]= useState(1)
  
   // Calcular el índice inicial y final para los elementos en la página actual
  const indexOfLastItem = currentPage * itemsPerPage; // ultimo indice
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;// primer indice
  const currentItem = dogs.slice(indexOfFirstItem, indexOfLastItem)
   

 const nextHandler=()=>{
  if(currentPage === Math.ceil(pages)) return
  setCurrentPage(currentPage + 1)
  }
 const prevHandler=()=>{

  if(currentPage === 1)return
  setCurrentPage(currentPage - 1)
 }

 useEffect( ()=>{
  dispatch(getAllDogs())
  dispatch(getTemperaments())

}, [])

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav nextHandler={nextHandler} pages={pages} currentItem={currentItem} prevHandler={prevHandler} setCurrentPage={setCurrentPage} currentPage={currentPage}/>}
  
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home nextHandler={nextHandler} pages={pages} currentItem={currentItem} prevHandler={prevHandler} setCurrentPage={setCurrentPage} currentPage={currentPage}/>}/>
        <Route path='/search' element={<Search />}/>
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


