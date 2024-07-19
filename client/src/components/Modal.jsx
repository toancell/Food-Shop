import { useState } from "react";
import { Link } from "react-router-dom";
const Modal = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log(data);
  return (
    <dialog id="my_modal_3" className="modal ">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        
        <div className="hero">
      <div className="hero-content flex-col flex">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input text-sm input-bordered"
                required
                value={data.email}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input text-sm input-bordered"
                required
                name="password"
                value={data.password}
                onChange={handleOnChange}
              />
            </div>
            <div className="justify-between items-center flex">
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <label className="label">
                <Link to={"/signup"}>
                    <a href="" className="label-text-alt text-green link link-hover">Sign Up</a>
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full bg-green" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
      </div>
    </dialog>
  );
};

export default Modal;
