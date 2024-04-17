import { useContext, useRef, useState } from "react";
import {useEffect} from "react"
import { MyContext } from "../context/MyContext";

export function NonVegFood(){
    /**useContext is a React Hook that lets you read and subscribe to 
     * context from your component. */

    let object=useContext(MyContext); // 4.


    let [nonvegFoods, updateArray]= useState(["Chicken Curry","Surmai Fish Fry","Murg Mussallam","Mutton Masala"]);
    
    let styleArray=["list-group-item",object.color]

    let liNodes= nonvegFoods.map((nvfood, ind)=><li key={ind} className={styleArray}>{nvfood}</li>);
    /** apply reference to any DOM element and we can extract value from that DOM */
    const inputElement=useRef();
    function getFood(){
       console.log(inputElement.current); // returns DOM element which is refered using useRef
       console.log(inputElement.current.value); // value of DOM element
      //  nonvegFoods.push(inputElement.current.value); // it wont work
      updateArray([...nonvegFoods,inputElement.current.value]) // it will work
    }
    useEffect(()=>{
       // console.log("nonveg food component");
       // console.log(nonvegFoods);
        return ()=>{
          //  console.log("implement clean up logic here....");
        }
    }, [nonvegFoods]);

    return (
        <section className={object.color}>
            <h5>Non Veg Main Course</h5>
            <b>Data from parent: { object.color} {object.food}</b> {/* //5 */}
            <ol className="list-group">
                {liNodes}
            </ol>
            <div>
                <h6>For Admin</h6>
                <input type="text" placeholder="Enter nonveg food item" ref={inputElement}></input> {/* uncontrolled input controls */}
                <button onClick={getFood}>CLICK</button>
            </div>
            <div>
              {/*   <button onClick={()=>setFood("new food")}>change food</button> */}
            </div>
        </section>
    );

}