import { useEffect, useState } from "react"
import {Cards }from "../components/index.jsx"
import { FaFilter } from "react-icons/fa";
const Shop = () => {
  const [menu, setMenu] = useState([])
  const [filteredItem, setFilteredItem] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortOptions, setSortOptions] = useState("Default")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemPerPage] = useState(8)
  useEffect(()=>{
    const fetchData = async () =>{
      try{
          const response = await fetch("/menu.json");
          const data = await response.json();
          setMenu(data)
          setFilteredItem(data)
          
      }catch(err){
        console.log(err)
      }
    }
    fetchData()
  },[])
  const filterItems = (category)  =>{
    const filted = category === "all" ? menu  : menu.filter( item => item.category === category)
    setFilteredItem(filted)
    setSelectedCategory(category)
    setCurrentPage(1)
  }
  const showAll = () =>{
    setFilteredItem(menu)
    setSelectedCategory("all")
    setCurrentPage(1)
  }
  const handleSortChange = (option) =>{
    setSortOptions(option);
    let sortedItems =[...filteredItem]
    switch(option){
      case "A-Z" : sortedItems.sort((a,b) => a.name.localeCompare(b.name)) 
      break;
      case "Z-A" : sortedItems.sort((a,b) => b.name.localeCompare(a.name)) 
      break;
      case "low-to-high" : sortedItems.sort((a,b) => a.price - b.price) 
      break;
      case "high-to-low" : sortedItems.sort((a,b) => b.price - a.price) 
      break;
      default: break;
    }
    setFilteredItem(sortedItems)
    setCurrentPage(1)
  }
  const indexOfLastItem = currentPage * itemPerPage
  const indexOfFirstItem = indexOfLastItem - itemPerPage 
  const currentItems = filteredItem.slice(indexOfFirstItem, indexOfLastItem)
  const paginate =(pageNumber) =>setCurrentPage(pageNumber)
  return (
    <div>
      <div className="flex py-24 flex-col md:flex-row justify-center items-center gap-8">
        <div className=" space-y-5 px-5 flex flex-col justify-center items-center">
          <h2 className="md:text-5xl text-4xl  font-bold md:leading-snug">
            For the Love of <i className="fa fa-delicious" aria-hidden="true"></i>{" "}
            <span className="text-green ">Food</span>
          </h2>
          <p className="text-xl text-center w-3/4 ">
            Come with family & feel th joy of mouthwatering food such as Greek Salad, Lasagne, Butternut Pumpkin, Tokusen Wagyu, Olivas Rellenas and more for a moderate cost
          </p>
          <button className="btn bg-green rounded-full  text-white font-semibold cursor-pointer">
            Order Now
          </button>
        </div>
      </div>
      <div className="section-container">
        <div className="flex flex-row justify-between mb-3">
          <div className="flex flex-row justify-start flex-wrap gap-3 ">
            <button onClick={showAll} className={selectedCategory === "all" ? "color-green underline" : ""}>All</button>
            <button onClick={() => filterItems("salad")} className={selectedCategory === "salad" ? "color-green underline" : ""}>Salad</button>
            <button onClick={() => filterItems("pizza")} className={selectedCategory === "pizza" ? "color-green underline" : ""}>Pizaa</button>
            <button onClick={() => filterItems("soup")} className={selectedCategory === "soup" ? "color-green underline" : ""}>Soups</button>
            <button onClick={() => filterItems("dessert")} className={selectedCategory === "dessert" ? "color-green underline" : ""}>Desserts</button>
            <button onClick={() => filterItems("drinks")} className={selectedCategory === "drinks" ? "color-green underline" : ""}>Drinks</button>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div>
              <FaFilter />
            </div>
            <select name="sort" id="sort" onChange={(e) =>handleSortChange(e.target.value)} value={sortOptions} className="outline uppercase">
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="high-to-low">high-to-low</option>
              <option value="low-to-high">low-to-high</option>
            </select>
          </div>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          {
          currentItems.map((item) =>(
            <Cards key={item.id} item={item}/>
          )
            
          )
          }

        </div>
        <div className="flex justify-center my-4">
          {
            Array.from({length :Math.ceil(filteredItem.length / itemPerPage)}).map((_,index) =>(
              <button key={index} onClick={() => paginate(index + 1 )} className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? "bg-green text-white" : ""}`}>
                {index + 1}
              </button>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Shop
