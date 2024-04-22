import { Link } from "react-router-dom"; //3.

export function CustomerCard({customer}){
   /*  console.log(customer.customerImage); */
    return(
        <div className="card bg-warning">
            <img src={require("../Resources/"+customer.customerImage)} className="card-img-top profilePic" alt="..."></img>
           
            <div className="card-body">
                <h5 className="card-title">#{customer.id}</h5>
                <h5 className="card-title">{customer.customerName}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><i>Email Id: </i><b>{customer.customerEmail}</b></li>
                <li className="list-group-item"><i>Mobile No: </i><b>{customer.customerContact}</b></li>
                <li className="list-group-item"><i>Username: </i><b>{customer.username}</b></li>
            </ul>
            <div className="card-body">
                <Link className="nav-link" to={`/edit/${customer.id}`}>EDIT</Link>
            </div>
        </div>
    );
}