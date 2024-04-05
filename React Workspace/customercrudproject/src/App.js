import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { MainCourse } from "./maincourse/MainCourse";
import { MyCustomer } from "./mycustomer/MyCustomer";
import { Test } from "./test/Test";
import { Greeting } from "./testclass/Greeting";



function App() {
  return (
    <>
      <Header></Header>
      {/* <Greeting></Greeting>
      <Test></Test> */}
     {/*  <MainCourse></MainCourse> */}
      <MyCustomer></MyCustomer>
      <Footer></Footer>
    </>
    
  );
}

export default App;
