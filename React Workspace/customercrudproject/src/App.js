import { useState } from "react";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { Login } from "./login/Login";
import { MainCourse } from "./maincourse/MainCourse";
import { MyCustomer } from "./mycustomer/MyCustomer";
import { Register } from "./register/Register";

import { MyContext } from "./context/MyContext";
import { Navigate, Route, Routes } from "react-router-dom";  //2.
import { Home } from "./home/Home";




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
     <Routes>
          <Route path="/" element={<Navigate to="home"></Navigate>}></Route>
          <Route path="home" element={ <Home/> }></Route>
          <Route path="register" element={  <Register/>  }></Route>
          <Route path="login" element={ <Login/> }></Route>
     </Routes>
      <Footer firstname="Vinay" lastname="Pawar"></Footer>
    </MyContext.Provider>
    </>
    
  );
}

export default App;
