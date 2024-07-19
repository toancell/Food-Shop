import { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [data,setData] = useState({
    email: "",
    password: "",
    name: "",
    profilePicture: ""
  })
  const handleOnChange= (e) =>{
    const {name, value} = e.target
    setData((prevData) =>(
      {
        ...prevData,
        [name] : value
      }
    ))
  }
  const handleGetImage = () =>{

  }
  console.log(data)
  const handleSubmit = async () => {
    console.log("data",data)
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up !</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
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
                value={data.password}
                placeholder="password"
                className="input input-bordered"
                required
                onChange={handleOnChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
                value={data.name}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Profile Picture</span>
              </label>
              <input type="file" placeholder="" className="input" required onChange={handleGetImage}/>
            </div>
            <div className="justify-between items-center flex">
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Do you have account ?
                </a>
              </label>
              <label htmlFor="">
                <Link to={"/"}>
                  <a href="#" className="label-text-alt link link-hover">
                    Log in
                  </a>
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bt bg-green" type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
