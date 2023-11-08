import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log("input field", name, email, password);
    // user created with firebase
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("user created", user);
      })
      .then((error) => console.log(error));
  };
  return (
    <div className=" m-[4%] md:ml-[30%] lg:ml-[35%] card justify-center w-full h-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
        <div className="form-control">
          <label className="lable">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
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
            value="sign up"
          />
        </div>
        <div className=" my-6 text-center items-start justify-center space-y-2">
          <p>
            Have an account?
            <Link to="/login">
              <span className="text-[#FF3811]">login</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
