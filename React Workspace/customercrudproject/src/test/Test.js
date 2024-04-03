

export function Test(){
    let orderType="a";

    let imageObject={
        imagePath:"https://th.bing.com/th/id/OIP.BJZuAZfQRH9Cv7vDEyJ1dQHaE7?rs=1&pid=ImgDetMain",
        altMessage:"food",
        height:"200",
        width:"400"
    }

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
            </figure>
        </>
    );
}