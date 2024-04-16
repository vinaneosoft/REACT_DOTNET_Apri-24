import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { Login } from "./login/Login";
import { MainCourse } from "./maincourse/MainCourse";
import { MyCustomer } from "./mycustomer/MyCustomer";
import { Register } from "./register/Register";
import { Test } from "./test/Test";
import { Greeting } from "./testclass/Greeting";



function App() {
  function test(datafromChild){
    alert("Parent function called " + datafromChild)
  }
  function test2(datafromChild){
    alert("Parent function called " + datafromChild)
  }
  return (
    <>
      <Header></Header>
      {/* <Greeting></Greeting>
       */}
    {/*  <MainCourse></MainCourse>  */}
    <Login></Login>
    {/* <MyCustomer></MyCustomer> */}
  {/*   <Register></Register> */}
     {/*  <Test  testFun={test} testFun2={test2}></Test>  */}
      <Footer firstname="Vinay" lastname="Pawar"></Footer>
    </>
    
  );
}

export default App;
