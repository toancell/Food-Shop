import { Outlet } from "react-router"
import {Navbar , Footer} from "../components/index.jsx"

import "../App.css"
const Main = () => {
  return (
    <div >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Main
