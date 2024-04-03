import { Navbar } from "../navbar/Navbar";
import "./Header.css"

export function Header(){
    return (
        <header className="myHeader">
            <h3>CUSTOMER CRUD</h3>
            <Navbar></Navbar>
        </header>
    );
}