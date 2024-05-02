import { useState } from "react";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { Login } from "./login/Login";
import { MyCustomer } from "./mycustomer/MyCustomer";
import { Register } from "./register/Register";

import { MyContext } from "./context/MyContext";

import { Home } from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { Child1 } from "./childs/Child1";
import { Child2 } from "./childs/Child2";


function App() {


  let[nvfood, setFood]=useState("Prawns Tawa Fry");
  let [textColor, setColor]=useState("text-warning");
  let myData={                //2
    food:nvfood,
    color:textColor
  }
  setTimeout(()=>{
    setFood("Prawns Masala")
    setColor("text-danger");
  },6000);
   function test(datafromChild){
    alert("Parent function called " + datafromChild)
  }
  function test2(datafromChild){
    alert("Parent function called " + datafromChild)
  } 
  return (
    <>
    <MyContext.Provider value={myData}>   {/*  3. */}
      <Header></Header>
      <h6>Dynamic View on App Component</h6>
     <Routes>
          <Route path="/" element={ <Navigate to="home"></Navigate>}></Route> {/*or use Navitage to home  */}
          <Route path="home" element={ <Home/> } 
          children={<>
              <Route path="child1" element={<Child1 />}></Route> {/* /home/child1 */}
              <Route path="child2" element={<Child2 />}></Route> {/* /home/child2 */}
            </>
          }></Route>
          <Route path="register" element={  <Register    /> }></Route>
          <Route path="login" element={ <Login/> }></Route>
          <Route path="customers" element={ <MyCustomer/> }></Route>
          <Route path="edit/:cid/:uname" element={  <Register    />  }></Route>{/* 1. configure a route with parameter,  user defined variable */}
     </Routes>
      <Footer firstname="Vinay" lastname="Pawar"></Footer>
    </MyContext.Provider>
    </>
    
  );
}

export default App;
