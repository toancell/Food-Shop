import "../App.css";
import BanImg from "../assets/images/home/banner.png";

const Banner = () => {
  
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="flex py-24 flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2 space-y-5 px-4">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug">
            Dive into Delights Of Delectable{" "}
            <span className="text-green">Food</span>{" "}
          </h2>
          <p className="text-xl">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <button className="btn bg-green rounded-full text-white font-semibold cursor-pointer">
            Order Now
          </button>
        </div>
        <div className="md:w-1/2 ">
          
            <img src={BanImg} alt="" />
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
