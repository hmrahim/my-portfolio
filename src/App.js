import logo from './logo.svg';
import './App.css';
import Header from './Components/Pages/Header/Header';
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <div className="App"  data-theme="light">
  <Header/>
  <Home/>
    </div>
  );
}

export default App;
