import "./MyCustomer.css"

import { getCustomers } from "../Model/CustomerCrud";
import { CustomerCard } from "../card/CustomerCard";


export function MyCustomer(){

    let customers=getCustomers();

    let trNodes=customers.map(customer=><tr key={customer.id}>
        <td>{customer.id}</td>
        <td>{customer.customerName}</td>
        <td>{customer.customerEmail}</td>
        <td>{customer.customerContact}</td>
        <td>{customer.username}</td>
        <td>{customer.password}</td>
    </tr>
    );

    let cards=customers.map(customer=>
        <div key={customer.id} className="col-md-3 border border-3 border-success">
            <CustomerCard customer={customer}></CustomerCard>
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