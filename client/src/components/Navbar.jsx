import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    console.log("scroll", sticky);
  }, [sticky]);

  return (
    <header className="max-w-screen-2xl fixed top-0 left-0 right-0 container mx-auto z-10 ">
      <div
        className={`navbar xl:px-24 ${
          sticky
            ? "shadow-md bg-slate-100 transition-all duration-300 ease-in-out"
            : ""
        }`}
      >
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <details>
                  <summary>Menu</summary>
                  <ul className="p-2">
                    <li>
                      <Link to="/menu">
                        {" "}
                        <a>All</a>
                      </Link>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Services</summary>
                  <ul className="p-2">
                    <li>
                      <a>Online Order</a>
                    </li>
                    <li>
                      <a>Table Booking</a>
                    </li>
                    <li>
                      <a href="">Order Traking</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a href="">Offers</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end ">
            <button className="btn btn-ghost btn-circle mr-3 hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <div className="dropdown dropdown-end mr-3 lg-block hidden md:flex  ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              <a className="btn bg-green rounded-full px-6 text-white flex items-center gap-2 hover:color-none">
                <FaUser />
                Log In
              </a>
            </button>
            <Modal />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
