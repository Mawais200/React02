


function Card({title, decription}) {
    let option = ["AWAIS", "AWAIS", "AWAIS"];


    return (
        <div className="text-center ">
            <div className="text-center text-yellow-500 border-black border-2 max-w-[full] mx-auto mb-[40px] w-[300px] ">
                <h1 className="text-[36px] font-semibold">{title} </h1> 
                <p className="text-[18px] ">{decription}</p>
                <ul className="list-none text-[18px]">Features is :{option.map((item, index) => <li key={index}>{item}</li>)}</ul>  
            </div>
        </div>
    )}
export default Card;