import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { URL } from "../config/config";
import Book from "./Book";

const BookingService = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `${URL}bookings?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">
        your booking:{" "}
        <span className="text-indigo-700 px-3">{bookings.length}</span>
      </h1>

      {bookings.map((booking) => (
        <Book key={booking._id} booking={booking}></Book>
      ))}
    </div>
  );
};

export default BookingService;
