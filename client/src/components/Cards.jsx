import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
const Cards = ({ item }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false)
  const handleHeartFilled = () =>{
    setIsHeartFilled(!isHeartFilled)
  }
  
  return (
    <div className="card px-2  bg-slate-100 shadow-md  relative" >
      <div  className={`rating gap-1 absolute right-1 top-1 p-4 heartStar rounded-full bg-green ${isHeartFilled ? " text-rose-500" : "text-white"}`}>
        <FaHeart className="h-5 w-5 cursor-pointer" onClick={handleHeartFilled}/>
      </div>
      <Link to={`/menu/${item._id}`}>
        <figure className="p-3">
          <img src={item.image} alt="" className="hover:scale-105 transition-all duration-200 md:h-75" />
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p className="text-sm">{item.recipe}</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">${item.price}</h5>
          <button className="btn bg-green text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
