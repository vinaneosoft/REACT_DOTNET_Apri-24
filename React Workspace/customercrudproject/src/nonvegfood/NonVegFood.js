import { useRef, useState } from "react";

export function NonVegFood(){
    let [nonvegFoods, updateArray]= useState(["Chicken Curry","Surmai Fish Fry","Murg Mussallam","Mutton Masala"]);
    
    let liNodes= nonvegFoods.map((nvfood, ind)=><li key={ind} className="list-group-item">{nvfood}</li>);
    /** apply reference to any DOM element and we can extract value from that DOM */
    const inputElement=useRef();
    function getFood(){
       console.log(inputElement.current); // returns DOM element which is refered using useRef
       console.log(inputElement.current.value); // value of DOM element
      //  nonvegFoods.push(inputElement.current.value); // it wont work
    }
    return (
        <>
            <h5>Non Veg Main Course</h5>
            <ol className="list-group">
                {liNodes}
            </ol>
            <div>
                <h6>For Admin</h6>
                <input type="text" placeholder="Enter nonveg food item" ref={inputElement}></input> {/* uncontrolled input controls */}
                <button onClick={getFood}>CLICK</button>
            </div>
        </>
    );

}