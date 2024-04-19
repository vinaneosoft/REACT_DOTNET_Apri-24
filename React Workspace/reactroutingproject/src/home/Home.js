import { Link, Outlet } from "react-router-dom";
import { MainCourse } from "../maincourse/MainCourse";


export function Home(){
    return (
        <div>
            <h5>Welcome to Ani's Kitchen</h5>
            <h6>You can order food from below main course</h6>

            <nav>
                <Link to="child1"> CHILD ROUTE 1</Link>
                <Link to="child2"> CHILD ROUTE 2</Link>
            </nav>
            <div>
                <h6>Dynamic View on Home Component</h6>
                <Outlet></Outlet>
            </div>
        </div>
    );
}