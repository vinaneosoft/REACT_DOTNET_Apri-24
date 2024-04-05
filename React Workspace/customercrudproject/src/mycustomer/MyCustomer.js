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
    </tr>)

    return(
        <table className="table table-hover">
            <thead>
            </thead>
            <tbody>
                {trNodes}
            </tbody>
        </table>
    );
}