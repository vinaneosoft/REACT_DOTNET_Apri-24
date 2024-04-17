import { useState } from "react";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { Login } from "./login/Login";
import { MainCourse } from "./maincourse/MainCourse";
import { MyCustomer } from "./mycustomer/MyCustomer";
import { Register } from "./register/Register";
import { Test } from "./test/Test";
import { Greeting } from "./testclass/Greeting";
import { MyContext } from "./context/MyContext";




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
      {/* <Greeting></Greeting>*/}
       <MainCourse></MainCourse> 
      {/*  <Login></Login> */}
      {/* <MyCustomer></MyCustomer> */}
      {/*   <Register></Register> */}
      {/*  <Test  testFun={test} testFun2={test2}></Test>  */}
      {nvfood}
      <Footer firstname="Vinay" lastname="Pawar"></Footer>
    </MyContext.Provider>
    </>
    
  );
}

export default App;
