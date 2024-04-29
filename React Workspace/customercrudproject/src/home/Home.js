import { Link, Outlet } from "react-router-dom";
import { MainCourse } from "../maincourse/MainCourse";
import { Counter } from "../counter/Counter";


export function Home(){
    return (
        <div>
            <h4>REACT STORE</h4>
            <Counter></Counter>
            <hr></hr>
            <h5>Welcome to Ani's Kitchen</h5>
            <h6>You can order food from below main course</h6>
            <MainCourse></MainCourse>
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