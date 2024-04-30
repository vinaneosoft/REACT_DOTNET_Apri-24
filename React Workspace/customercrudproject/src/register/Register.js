/** if we again on register then form must set to default customer again */



import { useEffect, useState } from "react";
import { Customer } from "../Model/Customer";
import { addCustmer, searchCustomerById, updateCustomer } from "../Model/CustomerCrud";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Register(){
    // take function red from useNavigate
    const navigate=useNavigate();
    // extract parameters from route : hook : useParams
    //let paramObject= useParams(); // 3. extracting data
   // console.log(paramObject);
    //console.log(paramObject.cid);
    // object destructuring
    const {cid, uname}=useParams();  // let cid=o.cid; let uname=o.uname;
   // console.log(cid);
    //console.log(uname);
    // in future in react http, we are going to search a customer at backend having id extracted from route
    let [customer, setCustomer]=useState(new Customer());
    let [heading, setHeading]=useState("REGISTER");
    let [readonly, setReadOnly]=useState(false);
     /** customer : current state of Customer type object */

    async function search(){
        const cust=await searchCustomerById(cid);
        setCustomer(cust);
        setHeading("UPDATE");
        setReadOnly(true);
    }
    function resetForm(){
        setHeading("REGISTER")
        setReadOnly(false);
        setCustomer(new Customer());
    }
    useEffect(()=>{
        //console.log("useEffect of register called");
        if(cid!==undefined){
            search();
        }
        else
           resetForm(); 
    },[cid]);
     function handleEvent(event){
       // console.log(event.target.name);
       // console.log(event.target.value);
        setCustomer(currentObject=>{
            return {...currentObject, [event.target.name]:event.target.value}
        })
     }
     async function add(){
        const status= await addCustmer(customer);
        if(status===201){
           window.alert("You are registered successfully...")
           navigate("/customers");
        }
        else{
            window.alert("Something went wrong....");
        }
     }
     async function update(){
        const updatestatus=await updateCustomer(customer);
        if(updatestatus==200){
            window.alert("Customer updated successfully.....");
            navigate("/customers");
        }
        else{
            window.alert("Something went wrong....");
        }
     }
    function collectData(e){
        e.preventDefault();
        if(cid===undefined)
            add();
        else
            update();
     }

    return (
        <section>
            <h5>CUSTOMER {heading} FORM</h5>
            <form onSubmit={collectData} onReset={search} className="bg-warning p-2">
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID:</label>
                    <input type="text" className="form-control" id="id" name="id" value={customer.id} onChange={handleEvent} readOnly={readonly}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="customerName" className="form-label">NAME:</label>
                    <input type="text" className="form-control" id="customerName" name="customerName" value={customer.customerName} onChange={handleEvent}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="customerContact" className="form-label">Mobile Number:</label>
                    <input type="number" className="form-control" id="customerContact" name="customerContact"   value={customer.customerContact} onChange={handleEvent}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="customerEmail" className="form-label">Email Id:</label>
                    <input type="text" className="form-control" id="customerEmail" name="customerEmail"  value={customer.customerEmail} onChange={handleEvent}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Set Username:</label>
                    <input type="text" className="form-control" id="username" name="username"  value={customer.username} onChange={handleEvent} readOnly={readonly}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Set Password:</label>
                    <input type="password" className="form-control" id="password" name="password"  value={customer.password} onChange={handleEvent} ></input>
                </div>
                <input type="submit" className="btn btn-primary" value={heading}  onChange={handleEvent}></input>
                <input type="reset" className="btn btn-secondary"></input>
            </form>
            <p>
                <i>Already a user??? click <Link to="/login">here</Link> to login!!!!</i>
            </p>
        </section>
    );
}