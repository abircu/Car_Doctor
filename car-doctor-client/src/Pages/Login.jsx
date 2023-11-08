import Navbar from "./Shared/Navbar";
import { CiFacebook } from "react-icons/ci";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FcGoogle } from "react-icons/fc";
import login from "../assets/login.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log("input field", email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log("new user here", user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-10 lg:gap-14">
          <div className=" w-1/2  ">
            <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full h-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-3xl font-bold text-center">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary bg-[#FF3811]"
                  type="submit"
                  value="Login"
                />
              </div>
              <div className=" my-6 text-center items-start justify-center space-y-2">
                <p>Or Sign In with</p>
                <div className="flex justify-center items-center gap-2 text-3xl">
                  <CiFacebook className="text-blue-600 "></CiFacebook>
                  <TiSocialLinkedinCircular className="text-blue-800 text-4xl"></TiSocialLinkedinCircular>
                  <FcGoogle></FcGoogle>
                </div>
                <p>
                  Haven,t account?
                  <Link to="/signUp">
                    <span className="text-[#FF3811]">Sign In</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
