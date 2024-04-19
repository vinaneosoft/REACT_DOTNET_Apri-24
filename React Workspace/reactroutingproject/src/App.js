/** vsdbdvfd */

import logo from './logo.svg';
import './App.css';
import {Header} from './header/Header'
import {Footer} from './footer/Footer';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
    <Header></Header>
      <Outlet></Outlet>
    <Footer></Footer>
    </>
  );
}

export default App;
