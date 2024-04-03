import { Navbar } from "../navbar/Navbar";
import "./Header.css"

export function Header(){
    let myHeading="CUSTOMER CRUP PROJECT";

    return (
        <header className="myHeader">
            <h4>{myHeading}</h4>
            <Navbar></Navbar>
        </header>
    );
}