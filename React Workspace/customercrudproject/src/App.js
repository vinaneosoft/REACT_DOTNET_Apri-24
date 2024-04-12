import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { MainCourse } from "./maincourse/MainCourse";
import { MyCustomer } from "./mycustomer/MyCustomer";
import { Register } from "./register/Register";
import { Test } from "./test/Test";
import { Greeting } from "./testclass/Greeting";



function App() {
  function test(datafromChild){
    alert("Parent function called " + datafromChild)
  }
  return (
    <>
      <Header></Header>
      {/* <Greeting></Greeting>
       */}
     {/*  <MainCourse></MainCourse> */}
    <MyCustomer></MyCustomer>
    <Register></Register>
     {/*  <Test  testFun={test}></Test> */}
      <Footer firstname="Vinay" lastname="Patil"></Footer>
    </>
    
  );
}

export default App;
