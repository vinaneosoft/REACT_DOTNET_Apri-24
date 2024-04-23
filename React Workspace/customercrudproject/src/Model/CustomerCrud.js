

import axios from "axios";

const url="http://localhost:3001/customers";

export async function addCustmer(customer){
     // connect to backend to add in data in json file
   // console.log(customer);
    const response=await axios.post(url,customer);
   // console.log(response);
   return response.status;  
}

export async function getCustomers(){
   const response= await axios.get(url); // connecting to external system
   return response.data;
}