
export function VegFood(){
    let vegFoods=["Mix Veg","Paneer Kadhai","Panner Masala","Malai Paneer"];

    let liNodes= vegFoods.map(vfood=><li key={vfood} className="list-group-item">{vfood}</li>);

    return (
        <>
            <h5>Veg Main Course</h5>
            <ol className="list-group">
                {liNodes}
            </ol>
        </>
    );

}