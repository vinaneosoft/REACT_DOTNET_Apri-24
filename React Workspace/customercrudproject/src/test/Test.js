import { useState } from "react";
import mixveg from "../Resources/mixveg.jpg"

let message="";


/* function testAge(age){
    if(age<18)
        message="SORRY YOU ARE NOT ALLOWED..";
    else
        message="WELCOME!!!! for Voting"
    return message;
}
 */

export function Test(props){
   
    let [age, changeAge]=useState(12);  // returns current state of vairable and function ref to change the state
    /** pass initial state from useState hook , input is still immutable. u have to bind onChage event
     *  age: variable holding current state,
     * changeAge : function ref , function is changing the state of age variable
     */
    function handleEvent(event){
        console.log(event);
        changeAge(event.target.value);
    }

    let orderType="a";

    let imageObject={
        imagePath:"https://th.bing.com/th/id/OIP.BJZuAZfQRH9Cv7vDEyJ1dQHaE7?rs=1&pid=ImgDetMain",
        altMessage:"food",
        height:"200",
        width:"400"
    }

    let companyName="NEOSOFT";

   
    if(age<18)
        message="SORRY YOU ARE NOT ALLOWED..";
    else
        message="WELCOME!!!! for Voting"

    function showAlert(){
        alert("BUTTON CLICKED..........");
    }
    function addTest(a,b){
        alert(a+b);
    }
    function testEvent(e){
        console.log(e);
    }
    return (
        <>
            <ol type={orderType}>
                <li>Veg Kadhai</li>
                <li>Veg Kadhai</li>
                <li>Veg Kadhai</li>
                <li>Veg Kadhai</li>
            </ol>
            {/*   put only name of the function if function is non-p  */}
            <button onClick={showAlert}>CLICK TO TEST REACT EVENT</button>
           {/*  /* inline/arrow funciton in jsx elements */ }
            <button onClick={()=>alert("logic in arrow function....")}>CLICK TO TEST REACT EVENT</button>
           {/*  /* call p-function */ }
            <button onClick={()=>addTest(45,78)}>CLICK TO TEST REACT EVENT</button>
            <button onClick={(ev)=>console.log(ev)}>CLICK</button>
            <button onClick={testEvent}>CLICK</button>
            <button onClick={()=>props.testFun(companyName)}>CALL PARENT</button>
            <figure>
                <img src={imageObject.imagePath} alt={imageObject.altMessage} height={imageObject.height} width={imageObject.width}></img>
                <img src={require("../Resources/mixveg.jpg")} alt={imageObject.altMessage} height={imageObject.height} width={imageObject.width}></img>
                <img src={mixveg} alt={imageObject.altMessage} height={imageObject.height} width={imageObject.width}></img>
            </figure>
            <div>
                <input type="number" placeholder="Enter Age" value={age} onChange={handleEvent}></input>
                <input type="number" placeholder="Enter Age" value={age} onChange={(event)=>changeAge(event.target.value)}></input>
                <p>
                    <b>Entered Age is : <span>{age}</span></b>
                </p>
            </div>
            <b>{message}</b>
            <i>{ age<18 ? "SORRY YOU ARE NOT ALLOWED.." : "WELCOME!!!! for Voting" }</i>
        </>
    );
}