import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { URL } from "../config/config";
import Book from "./Book";
import Swal from "sweetalert2";
import axios from "axios";

const BookingService = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `${URL}bookings?email=${user.email}`;
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setBookings(res.data);
    });
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBookings(data);
    //   });
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("are you sure you want to delete");

    if (proceed) {
      fetch(`${URL}bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              icon: "success",
              title: "data deleted successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };
  const handleConfirm = (id) => {
    fetch(`${URL}bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">
        your booking:{" "}
        <span className="text-indigo-700 px-3">{bookings.length}</span>
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="flex  justify-evenly bg-slate-400 text-black font-semibold ">
              <th>image</th>
              <th className="text-center">Service</th>
              <th className="text-center">date</th>
              <th>price</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
      </div>

      {bookings &&
        bookings?.map((booking) => (
          <Book
            key={booking._id}
            booking={booking}
            handleDelete={handleDelete}
            handleConfirm={handleConfirm}
          ></Book>
        ))}
    </div>
  );
};

export default BookingService;
