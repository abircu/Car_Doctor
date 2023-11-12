import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { URL } from "../config/config";

const BookingService = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `${URL}bookings?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log("bookings data", data));
  }, []);
  return (
    <div>
      <h1>service booking page</h1>
    </div>
  );
};

export default BookingService;
