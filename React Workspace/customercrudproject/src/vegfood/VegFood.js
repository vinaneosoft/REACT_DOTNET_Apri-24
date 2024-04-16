 import {useEffect} from "react"
export function VegFood(){
    let vegFoods=["Mix Veg","Paneer Kadhai","Panner Masala","Malai Paneer"];

    let liNodes= vegFoods.map((vfood, ind)=><li key={ind} className="list-group-item">{vfood}</li>);

    useEffect(()=>{
       // console.log("Additional settings to do after component is rendered");
        return ()=>{
          //  console.log("implement clean up logic here....");
            cleanUp();
        }
    });
    function cleanUp(){
       // console.log("seperate function for cleanup");
    }

    return (
        <>
            <h5>Veg Main Course</h5>
            <ol className="list-group">
                {liNodes}
            </ol>
        </>
    );

}