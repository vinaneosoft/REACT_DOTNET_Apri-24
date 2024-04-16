/**Changing a ref does not trigger a re-render, so refs are not appropriate for storing information
 *  you want to display on the screen. Use state for that instead.  */
import { useEffect, useRef, useState } from "react";
import { NonVegFood } from "../nonvegfood/NonVegFood";
import { VegFood } from "../vegfood/VegFood";


export function MainCourse(){
    let [foodType, setType]= useState(""); // in future we will use logic of checkboxes here

    function changeType(e){
       // console.log(e.target.value);
        setType(e.target.value);
    }

    let [counter1, setCounter]=useState(0); 
    let counter2=useRef(0);
    function increment(){
       // setCounter(++counter1); // once state variable gets updated, components get re rendered...
        counter2.current=counter2.current+1; // component does not get re rendered if ref value is getting updated
        console.log(counter2.current);
    }
   


    useEffect(()=>{
        console.log("after Component gets rendered, useEffect gets called...");
    });
  
    return (
        <section>
            <h4>Main Course</h4>
            <b>Select Option</b>
            <input type="radio" name="ftype" value="vegfood" onChange={changeType}></input> <i>:VEG</i>
            <input type="radio" name="ftype"  value="nonvegfood" onChange={changeType}></input><i> :NON VEG</i>
            <p>{foodType}</p>
            <div>
                {foodType==="" && <><VegFood></VegFood><NonVegFood></NonVegFood></>}
                {foodType==="vegfood" && <VegFood></VegFood>}
                {foodType==="nonvegfood" && <NonVegFood></NonVegFood>}
            </div>
            <hr></hr>
            <div>
                <p>state : {counter1}</p>
                <p>ref : {counter2.current}</p>
                <button className="btn btn-danger" onClick={increment}>+</button>
            </div>
        </section>
    );
}