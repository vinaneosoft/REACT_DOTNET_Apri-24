import "./MyCustomer.css"
import {deleteCutomerById,getCustomers, searchCustomerById} from "../Model/CustomerCrud"; // u can use * as prefix
import { CustomerCard } from "../card/CustomerCard";
import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';

export function MyCustomer(){

    let [customers, setCustomers]=useState([]);
    let [searchId, setId]=useState("");

    async function  deleteCust(id){
        const resstatus=  await deleteCutomerById(id);
        if(resstatus==200){
           window.alert("customer account Deleted successfully...");
           fetchData();
        }
        else
           window.alert("Something went wrong.....");
   }
   async function searchCustomer(event){
        console.log(event.target.value);
        setId(event.target.value);
       await searchCustomerById(event.target.value)
        .then((data)=>{
            console.log("data from backend", data); // object / array
           // console.log(temp);
            if(event.target.value!=""){
                let temp=[data];  
                setCustomers(temp); // array
            }
            else
                setCustomers(data); // array
        })
        .catch(()=>console.log("error"));
   }
    async function fetchData(){
        console.log("in fetch data");
        customers=await getCustomers();
        setCustomers([...customers]); // mandatory : re rendered
    }
    useEffect( ()=>{
       fetchData();
    }, []);

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
           <CustomerCard customer={customer} deleteCust={deleteCust}></CustomerCard>
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
            <label htmlFor="cid">Enter Id to search customer: </label>
            <TextField id="cid" label="customer id" variant="standard" value={searchId} onChange={searchCustomer} />
            <p></p>
            <div className="row">
               {cards} 
            </div>
        </section>
        </>

    );
}