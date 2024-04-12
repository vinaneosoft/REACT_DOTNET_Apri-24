import { useState } from "react";
import { Customer } from "../Model/Customer";


export function Register(){

    let [customer, setCustomer]=useState(new Customer());
     /** customer : current state of Customer type object */



    return (
        <section>
            <h5>CUSTOMER INPUT FORM</h5>
            <form>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID:</label>
                    <input type="text" className="form-control" id="id" value={customer.id}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="customerName" className="form-label">NAME:</label>
                    <input type="text" className="form-control" id="customerName"  value={customer.customerName}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="customerContact" className="form-label">Mobile Number:</label>
                    <input type="text" className="form-control" id="customerContact"  value={customer.customerContact}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="customerEmail" className="form-label">Email Id:</label>
                    <input type="text" className="form-control" id="customerEmail"  value={customer.customerEmail}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Set Username:</label>
                    <input type="text" className="form-control" id="username"  value={customer.username}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Set Password:</label>
                    <input type="text" className="form-control" id="password"  value={customer.password}></input>
                </div>
                <input type="submit" className="btn btn-primary" defaultValue="REGISTER"></input>
            </form>
        </section>
    );
}