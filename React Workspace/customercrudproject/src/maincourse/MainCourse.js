
import { NonVegFood } from "../nonvegfood/NonVegFood";
import { VegFood } from "../vegfood/VegFood";


export function MainCourse(){
    let foodType=""; // in future we will use logic of checkboxes here
    let component;
    if(foodType===undefined || foodType === "")
    component=<><VegFood></VegFood><NonVegFood></NonVegFood></>
    else{
        if(foodType==="veg")
            component=<VegFood></VegFood>
        else
            component=<NonVegFood></NonVegFood>
    }
    return (
        <section>
            <h4>Main Course</h4>
            {component}
            <h4>Main Course</h4>
            {foodType==="veg" ? <VegFood></VegFood>  : <NonVegFood></NonVegFood> }
            <h4>Main Course 3</h4>
            {(foodType===undefined || foodType==="") && <><VegFood></VegFood><NonVegFood></NonVegFood></>}
        </section>
    );
}