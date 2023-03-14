import './App.css';
import { Route, Routes  } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Create from './components/Create/Create';
import Details from './components/Details/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage/>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/navbar' element={<Navbar></Navbar>}></Route>
        <Route path='/activity' element={<Create></Create>}></Route>
        <Route path='/home/:countryId' element={<Details></Details>}/>
      </Routes>
    </div>
  );
}

export default App;
