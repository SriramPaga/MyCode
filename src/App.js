
// import './App.css';
import Home from './Components/Home';
import Sample from './Components/Sample';
import Types from './Components/Pages/Types'
import MoreDetails from './Components/Pages/MoreDetails'
import ContactUs from './Components/Pages/ContactUs'
import SignUp from './Components/Pages/SignUp';
import Table from './Components/Pages/Table';

import {BrowserRouter} from 'react-router-dom';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
    <div>
        <Routes>    
            <Route path='/' element = {<Home></Home>}> </Route>
            <Route path='/Home' element = {<Home></Home>}> </Route>
            <Route path='/Sample' element = {<Sample></Sample>}> </Route>
            <Route path='/Types' element = {<Types></Types>}> </Route>
            <Route path='/MoreDetails' element = {<MoreDetails></MoreDetails>}> </Route>
            <Route path='/ContactUs' element = {<ContactUs></ContactUs>}> </Route>
            <Route path='/SignUp' element = {<SignUp></SignUp>}> </Route>
            <Route path ='/Table' element={<Table></Table>}></Route>
            
        </Routes>
        </div></BrowserRouter>
  );
}

export default App;
