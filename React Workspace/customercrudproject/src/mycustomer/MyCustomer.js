import { getCustomers } from "../Model/CustomerCrud";



export function MyCustomer(){

    let customers=getCustomers();

    let trNodes=customers.map(customer=><tr>
        <td>{customer.id}</td>
        <td>{customer.customerName}</td>
        <td>{customer.customerEmail}</td>
        <td>{customer.customerContact}</td>
        <td>{customer.username}</td>
        <td>{customer.password}</td>
    </tr>
    );

    let cards=customers.map(customer=>
        <div className="col-md-3 border border-3 border-success">
            <div className="card bg-warning">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">#{customer.id}</h5>
                <h5 className="card-title">{customer.customerName}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><small>Email Id: </small><b>{customer.customerEmail}</b></li>
                <li className="list-group-item"><small>Mobile No: </small><b>{customer.customerContact}</b></li>
                <li className="list-group-item"><small>Username: </small><b>{customer.username}</b></li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">EDIT</a>
                <a href="#" className="card-link">DELETE</a>
            </div>
            </div>
        </div>
        );
    return(
        <>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL ID</th>
                    <th>MOBILE NO</th>
                    <th>USERNAME</th>
                    <th>PASSWORD</th>
                </tr>
            </thead>
            <tbody>
                {trNodes}
            </tbody>
        </table>
        <section>
            <div className="row">
                {cards}
            </div>
        </section>
        </>

    );
}