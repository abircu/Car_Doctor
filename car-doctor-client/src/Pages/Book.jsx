import React from "react";

const Book = ({ booking }) => {
  const { customerName, img, email, service, date, price } = booking;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          {/* <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead> */}
          <tbody>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {customerName}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
              </td>
              <td>{service}</td>
              <td>{date}</td>
              <td>{price}</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      ;
    </div>
  );
};

export default Book;
