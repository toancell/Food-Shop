
const serviceList =[
    {
        id: 1,
        title: "Catering",
        des: "Delight your guests with our flavors and presentation",
        image: "/images/home/services/icon1.png"
    },
    {
        id: 2,
        title: "Fast Delivery",
        des: "Delight your guests with our flavors and presentation",
        image: "/images/home/services/icon2.png"
    },
    {
        id: 3,
        title: "Online Ordering",
        des: "Delight your guests with our flavors and presentation",
        image: "/images/home/services/icon3.png"
    },
    {
        id: 4,
        title: "Gift Cards",
        des: "Delight your guests with our flavors and presentation",
        image: "/images/home/services/icon4.png"
    }
]

const OurServices = () => {

  return (
    <div className="section-container my-16">
      <div className="flex flex-col md:flex-row items-center justify-between  gap-12">
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Our Story & Services</p>
            <h2 className="title">Our Culinary Journey and Services </h2>
            <p className="my-5 text-secondary leading-[30px]">
              Rooted in passion, we curate unforgettable dining experiences and
              offer exception services, blending culinay artistry with warm
              hospitality
            </p>
            <button className="btn bg-green text-white px-8 py-3 rounded-full">
                Explore
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 ">
                {serviceList.map((item) =>(
                    <div key={item.id} className="shadow-md py-8 text-center rounded-lg space-y-2 text-green cursor-pointer hover:border-indigo-500 transition-all duration-200 hover:border ">
                        <img src={item.image} alt="" className="mx-auto" />
                        <h5 className="pt-3 font-semibold">{item.title}</h5>
                        <p className="text-[#90BD95]">{item.des}</p>
                    </div>


                ))}
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default OurServices;
