
import { useRoutes } from 'react-router-dom';
import { Routes } from './Routes/Routes';
import Nav from './Component/NavBar/Nav';
import Hero from './Component/Main/Hero';
import Subbody from './Component/Body/Subbody'
import Bottom from './Component/Footer/Bottom';



function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Subbody/>
      <Bottom/>
    </>
  )
}

export default App;

 


