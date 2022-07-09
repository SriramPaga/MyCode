import Cover from './Images/Cover.png'
import './Navigation.js'
import './Home.css';
import { Button } from 'react-bootstrap';

import {useNavigate} from 'react-router-dom'


function Home() { 
  const history= useNavigate();
  return (
     <div className="Home">
     <header> <img src={Cover} className="Home-Bg" alt="logo" /> </header>
        <h1 className='HomeTitle'>Welcome to storage</h1>
        <Button onClick={()=>history('/SignUp')}>Get Started</Button>
      
  
    </div>
    
  );

}

export default Home;
