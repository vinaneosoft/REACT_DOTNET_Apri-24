import { useState } from "react";
import { Customer } from "../Model/Customer";
import { addCustmer } from "../Model/CustomerCrud";
import { Link, useParams } from "react-router-dom";


export function Register(){

    // extract parameters from route : hook : useParams

    let paramObject= useParams();
   // console.log(paramObject);
    //console.log(paramObject.cid);

    // object destructuring

    let {cid, uname}=useParams();  // let cid=o.cid; let uname=o.uname;
    console.log(cid);
    console.log(uname);
    // in future in react http, we are going to search a customer at backend having id extracted from route
    let [customer, setCustomer]=useState(new Customer());
     /** customer : current state of Customer type object */

     function handleEvent(event){
       // console.log(event.target.name);
       // console.log(event.target.value);
        setCustomer(currentObject=>{
            return {...currentObject, [event.target.name]:event.target.value}
        })
     }
     function collectData(e){
        e.preventDefault();
       // console.log(customer);

        addCustmer(customer);
     }

    return (
        <section>
            <h5>CUSTOMER INPUT / UPDATE FORM</h5>
            <form onSubmit={collectData}>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID:</label>
                    <input type="text" className="form-control" id="id" name="id" value={customer.id} onChange={handleEvent}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="customerName" className="form-label">NAME:</label>
                    <input type="text" className="form-control" id="customerName" name="customerName" value={customer.customerName} onChange={handleEvent}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="customerContact" className="form-label">Mobile Number:</label>
                    <input type="text" className="form-control" id="customerContact" name="customerContact"   value={customer.customerContact} onChange={handleEvent}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="customerEmail" className="form-label">Email Id:</label>
                    <input type="text" className="form-control" id="customerEmail" name="customerEmail"  value={customer.customerEmail} onChange={handleEvent}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Set Username:</label>
                    <input type="text" className="form-control" id="username" name="username"  value={customer.username} onChange={handleEvent}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Set Password:</label>
                    <input type="text" className="form-control" id="password" name="password"  value={customer.password} onChange={handleEvent}></input>
                </div>
                <input type="submit" className="btn btn-primary" defaultValue="REGISTER"></input>
            </form>
            <p>
                <i>Already a user??? click <Link to="/login">here</Link> to login!!!!</i>
            </p>
        </section>
    );
}