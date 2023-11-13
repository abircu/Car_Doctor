const Book = ({ booking, handleDelete, handleConfirm }) => {
  const { _id, img, email, service, date, price, status } = booking;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr>
              <th>
                <label>
                  <button
                    onClick={() => handleDelete(_id)}
                    className="btn btn-circle btn-sm bg-slate-600 text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
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
              {/* <td>
                {customerName}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
              </td> */}
              <td>{service}</td>
              <td>{date}</td>
              <td>{price}</td>
              <th>
                {status === "confirm" ? (
                  <span className="font-bold text-primary">confirm</span>
                ) : (
                  <button
                    onClick={() => handleConfirm(_id)}
                    className="btn btn-ghost btn-xs"
                  >
                    Please Confirm
                  </button>
                )}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Book;
