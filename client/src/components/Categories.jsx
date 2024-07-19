import Category1 from "../assets/images/home/category/img1.png";
import Category2 from "../assets/images/home/category/img2.png";
import Category3 from "../assets/images/home/category/img3.png";
import Category4 from "../assets/images/home/category/img4.png";
const Categories = () => {
  const categoriesItem = [
    {
      id: 1,
      title: "Main Dish",
      des: "(86 dishes)",
      images: Category1,
    },
    {
      id: 1,
      title: "Break Fash",
      des: "(12 breakfash)",
      images: Category2,
    },
    {
      id: 1,
      title: "Dessert",
      des: "(48 dished)",
      images: Category3,
    },
    {
      id: 1,
      title: "Browse All",
      des: "(86 dishes)",
      images: Category4,
    },
  ];

  return (
    <div className="section-container py-16">
      <div className="text-center">
        <p className="subtitle">Customer Favorites</p>
        <h2 className="title">Customer Favorites</h2>
      </div>
      <div className="mt-4 flex justify-center flex-wrap gap-8 items-center ">
        {categoriesItem.map((item) => (
          <div key={item.id} className="cursor-pointer shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center flex flex-col justify-center items-center hover:-translate-y-4 duration-300">
            <div  >
              <img
                src={item.images}
                alt=""
                className="bg-[#C1F1C6] p-5 rounded-full w-28 h-28"
              />
            </div>
            <div className="mt-5 space-y-1">
              <h5>{item.title}</h5>
              <p>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
