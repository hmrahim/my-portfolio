import logo from './logo.svg';
import './App.css';
import Header from './Components/Pages/Header/Header';
import Home from './Components/Pages/Home/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Details from './Components/Pages/Home/Details';
import Footer from './Components/Pages/Home/Footer';

function App() {
  return (
    <div className="App"  data-theme="light">
  <Header/>
  <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='/details/:id'  element={<Details/>}/>
  </Routes>

  <Footer/>
  




  <ToastContainer/>
    </div>
  );
}

export default App;
