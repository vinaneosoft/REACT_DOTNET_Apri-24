import { NonVegFood } from "../nonvegfood/NonVegFood";
import { VegFood } from "../vegfood/VegFood";


export function MainCourse(){
    let foodType="nonveg"; // in future we will use logic of checkboxes here
    let component;
    if(foodType=="veg")
        component=<VegFood></VegFood>
    else
        component=<NonVegFood></NonVegFood>

    return (
        <section>
            <h4>Main Course</h4>
            {component}
            <h4>Main Course</h4>
            {foodType=="veg" ? <VegFood></VegFood>  : <NonVegFood></NonVegFood> }
        </section>
    );
}