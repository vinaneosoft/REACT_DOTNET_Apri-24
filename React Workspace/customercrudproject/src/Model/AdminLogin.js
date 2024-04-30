

adminusername="admin1";
adminpassword="admin1@123"


export function adminLogin(username, password){
    if(username===adminusername && password===adminpassword)
        return true;
    else
        return false;
}