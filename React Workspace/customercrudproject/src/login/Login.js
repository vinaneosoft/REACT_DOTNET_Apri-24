/** input controls : controlled : value (immutable), onChange , useState
 * input control : uncontrolled : defaultValue, ref
 */

import { useRef } from "react";
import { Link } from "react-router-dom";
import { adminLogin } from "../Model/AdminLogin";

export function Login(){
    let usernameNode=useRef();
    let passwordNode=useRef();
    let loginType=useRef();

    function loginCheck(e){
        e.preventDefault();
       // console.log(usernameNode.current.value);
       // console.log(passwordNode.current.value);
       // console.log(loginType.current.value);
       let flag=false;
       if(loginType.current.value==="admin"){
            flag=adminLogin(usernameNode.current.value,passwordNode.current.value)
       }
       if(flag===true)
           alert("You are logged in successfully");
       else
           alert("Incorrect username or password");
    }
  

    return(
        <section>
        <form onSubmit={loginCheck}>
             <div className="mb-3">
                <label htmlFor="loginType" className="form-label">Select Login Type</label>
                <select className="form-control" id="loginType" ref={loginType}>
                    <option value="customer">CUSTOMER</option>
                    <option value="admin">ADMIN</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="uname" className="form-label">Username</label>
                <input type="text" className="form-control" id="uname" defaultValue="vina" ref={usernameNode}></input>
               
            </div>
            <div className="mb-3">
                <label htmlFor="pass" className="form-label">Password</label>
                <input type="password" className="form-control" id="pass" defaultValue="vina123" ref={passwordNode}></input>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
            </div>
            <input type="submit" className="btn btn-primary" defaultValue="SUBMIT"></input> 
        </form>
        <p>
            Not yet registered??? Sign up from <Link to="/register">here</Link>
        </p>
        </section>
    );
}