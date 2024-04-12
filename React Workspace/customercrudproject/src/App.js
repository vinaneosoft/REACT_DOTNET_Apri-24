import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { MainCourse } from "./maincourse/MainCourse";
import { MyCustomer } from "./mycustomer/MyCustomer";
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
    {/* <MyCustomer></MyCustomer> */}
      <Test  testFun={test}></Test>
      <Footer firstname="Vinay" lastname="Patil"></Footer>
    </>
    
  );
}

export default App;
