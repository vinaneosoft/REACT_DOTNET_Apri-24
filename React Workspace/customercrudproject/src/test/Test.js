import mixveg from "../Resources/mixveg.jpg"

let message="";
let age=12;

function testAge(){
    if(age<18)
        message="SORRY YOU ARE NOT ALLOWED..";
    else
        message="WELCOME!!!! for Voting"
    return message;
}


export function Test(props){
    let orderType="a";

    let imageObject={
        imagePath:"https://th.bing.com/th/id/OIP.BJZuAZfQRH9Cv7vDEyJ1dQHaE7?rs=1&pid=ImgDetMain",
        altMessage:"food",
        height:"200",
        width:"400"
    }

   
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
            <button onClick={props.testFun}>CALL PARENT</button>
            <figure>
                <img src={imageObject.imagePath} alt={imageObject.altMessage} height={imageObject.height} width={imageObject.width}></img>
                <img src={require("../Resources/mixveg.jpg")} alt={imageObject.altMessage} height={imageObject.height} width={imageObject.width}></img>
                <img src={mixveg} alt={imageObject.altMessage} height={imageObject.height} width={imageObject.width}></img>
            </figure>
            <b>{message}</b>
            <p>{testAge()}</p>
            <i>{ age<18 ? "SORRY YOU ARE NOT ALLOWED.." : "WELCOME!!!! for Voting" }</i>
        </>
    );
}