import { Navbar } from "../navbar/Navbar";
import "./Header.css"





export function Header(){
    let myHeading="CUSTOMER CRUP PROJECT";

    function getSubheading(){
        return "FOOD ORDER"
    }

    return (
        <header className="myHeader">
            <h4>{myHeading}</h4>
            <h5>{getSubheading()}</h5>
            <Navbar></Navbar>
        </header>
    );
}