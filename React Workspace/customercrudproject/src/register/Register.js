

export function Register(){
    return (
        <section>
            <h5>CUSTOMER INPUT FORM</h5>
            <form>
                <div class="mb-3">
                    <label for="id" className="form-label">ID:</label>
                    <input type="text" className="form-control" id="id"></input>
                </div>
                <div class="mb-3">
                    <label for="customerName" className="form-label">NAME:</label>
                    <input type="text" className="form-control" id="customerName"></input>
                </div>
                <input type="submit" class="btn btn-primary" defaultValue="REGISTER"></input>
            </form>
        </section>
    );
}