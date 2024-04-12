

export function Register(){
    return (
        <section>
            <h5>CUSTOMER INPUT FORM</h5>
            <form>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID:</label>
                    <input type="text" className="form-control" id="id"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="customerName" className="form-label">NAME:</label>
                    <input type="text" className="form-control" id="customerName"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="customerContact" className="form-label">Mobile Number:</label>
                    <input type="text" className="form-control" id="customerContact"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="customerEmail" className="form-label">Email Id:</label>
                    <input type="text" className="form-control" id="customerEmail"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Set Username:</label>
                    <input type="text" className="form-control" id="username"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Set Password:</label>
                    <input type="text" className="form-control" id="password"></input>
                </div>
                <input type="submit" className="btn btn-primary" defaultValue="REGISTER"></input>
            </form>
        </section>
    );
}