
import { useEffect, useState } from "react";
import { NonVegFood } from "../nonvegfood/NonVegFood";
import { VegFood } from "../vegfood/VegFood";


export function MainCourse(){
    let [foodType, setType]= useState(""); // in future we will use logic of checkboxes here

    function changeType(e){
       // console.log(e.target.value);
        setType(e.target.value);
    }
    
  
    return (
        <section>
            <h4>Main Course</h4>
            <b>Select Option</b>
            <input type="radio" name="ftype" value="vegfood" onChange={changeType}></input> <i>:VEG</i>
            <input type="radio" name="ftype"  value="nonvegfood" onChange={changeType}></input><i> :NON VEG</i>
            <div>
                {foodType==="" && <><VegFood></VegFood><NonVegFood></NonVegFood></>}
                {foodType==="vegfood" && <VegFood></VegFood>}
                {foodType==="nonvegfood" && <NonVegFood></NonVegFood>}
            </div>
        </section>
    );
}