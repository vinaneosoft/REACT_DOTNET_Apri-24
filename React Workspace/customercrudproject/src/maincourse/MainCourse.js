import { NonVegFood } from "../nonvegfood/NonVegFood";
import { VegFood } from "../vegfood/VegFood";


export function MainCourse(){




    
    return(
        <section>
            <h4>Main Course</h4>
            <VegFood></VegFood>
            <NonVegFood></NonVegFood>
        </section>
    );
}