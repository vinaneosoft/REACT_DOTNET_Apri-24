

import axios from "axios";

const url="http://localhost:3001/customers";

export async function addCustmer(customer){
     // connect to backend to add in data in json file
   // console.log(customer);
    const response=await axios.post(url,customer); /** data sent from request body */
   // console.log(response);
   return response.status;  
}

export async function getCustomers(){
   const response= await axios.get(url); // connecting to external system
   return response.data;
}

export async function deleteCutomerById(id){
   const response=await axios.delete(`${url}/${id}`); // or url+"/"+id
   return response.status;  
}

export async function searchCustomerById(id){
   axios.get(`${url}/${id}`).then(response=>{
     // console.log(response.data);
      return response.data;
  })
  .catch(()=>{console.log("error occured")});// or url+"/"+id
  // console.log(response.data);
  // return response.data;
}

export async function updateCustomer(customer){
   const response=await axios.put(`${url}/${customer.id}`,customer)
   return response.status;
} 