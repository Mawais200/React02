




function Card({title, decription,feature}) {

    return(
        <div className="text-center ">
            <div className="text-center  text-yellow-500 border-black border-2 max-w-[full] mx-auto mb-[40px] w-[300px] ">
              <h1 className="text-[36px] font-semibold">{title} </h1> 
              <p className="text-[18px] ">{decription}</p>
              <p className="text-[18px] ">{feature}</p>  
              
            </div>
            </div>
    )}
export default Card;