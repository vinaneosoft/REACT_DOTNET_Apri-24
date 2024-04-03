import mixveg from "../Resources/mixveg.jpg"

export function Test(){
    let orderType="a";

    let imageObject={
        imagePath:"https://th.bing.com/th/id/OIP.BJZuAZfQRH9Cv7vDEyJ1dQHaE7?rs=1&pid=ImgDetMain",
        altMessage:"food",
        height:"200",
        width:"400"
    }
    
    let message="";
    let age=32;
    if(age<18)
        message="SORRY YOU ARE NOT ALLOWED..";
    else
        message="WELCOME!!!! for Voting"


    return (
        <>
            <ol type={orderType}>
                <li>Veg Kadhai</li>
                <li>Veg Kadhai</li>
                <li>Veg Kadhai</li>
                <li>Veg Kadhai</li>
            </ol>
            <figure>
                <img src={imageObject.imagePath} alt={imageObject.altMessage} height={imageObject.height} width={imageObject.width}></img>
                <img src={require("../Resources/mixveg.jpg")} alt={imageObject.altMessage} height={imageObject.height} width={imageObject.width}></img>
                <img src={mixveg} alt={imageObject.altMessage} height={imageObject.height} width={imageObject.width}></img>
            </figure>
            <b>{message}</b>

        </>
    );
}