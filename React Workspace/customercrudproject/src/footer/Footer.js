import "./Footer.css"

export function Footer({firstname,lastname}){  //props object
    return (
        <footer className="myFooter">
            <p>
                <b>Author Name :<span>{firstname} {lastname}</span> </b>
                <small>Copyright by ......</small>
            </p>
         
        </footer>
    );
}