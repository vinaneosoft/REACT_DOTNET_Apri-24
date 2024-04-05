
export function NonVegFood(){
    let nonvegFoods=["Chicken Curry","Surmai Fish Fry","Murg Mussallam","Mutton Masala"];
    let liNodes= nonvegFoods.map((nvfood, ind)=><li key={ind} className="list-group-item">{nvfood}</li>);
    return (
        <>
            <h5>Non Veg Main Course</h5>
            <ol className="list-group">
                {liNodes}
            </ol>
        </>
    );

}