import { Customer } from "./Customer";

let customers=[
    new Customer(),
    new Customer("c1","Poonam Pawar","poo@gmail.com", 9898989898,"poo","Poo@123"),
    new Customer("c3","Poonam Pandey","pandey@gmail.com", 8888888888,"poonam","Pandey@123"),
    new Customer("c6","Ritha Kumari","ritha@gmail.com", 7878787878,"ritha","ritha@123"),
    new Customer("c2","Kiran Pujari","kiran@gmail.com", 9090909090,"kiran","kiran@123"),
]

export function getCustomers(){
    return customers;
}