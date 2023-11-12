import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { URL } from "../config/config";
import Swal from "sweetalert2";

const ChackOut = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  console.log("service data", service);
  const { user } = useContext(AuthContext);
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      email,
      date,
      img: img,
      service: title,
      service_id: _id,
      price: price,
    };

    console.log("checkout information is", booking);

    fetch(`${URL}bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Service booking successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold text-center">
        checkout component: {title}
      </h1>
      <form
        onSubmit={handleBooking}
        className="card-body w-full md:w-[80%] lg:w-[50%]"
      >
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
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
                defaultValue={user?.email}
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="Date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due amount</span>
              </label>
              <input
                type="number"
                name="dewamount"
                defaultValue={price}
                placeholder="Dew amount"
                className="input input-bordered"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="Booking" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default ChackOut;
