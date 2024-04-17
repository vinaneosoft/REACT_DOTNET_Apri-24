import { MainCourse } from "../maincourse/MainCourse";


export function Home(){
    return (
        <div>
            <h5>Welcome to Ani's Kitchen</h5>
            <h6>You can order food from below main course</h6>
            <MainCourse></MainCourse>
        </div>
    );
}