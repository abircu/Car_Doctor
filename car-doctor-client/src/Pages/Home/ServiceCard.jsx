import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({ service }) => {
  const { _id, service_id, title, img, price, description, facility } = service;
  return (
    <div>
      <div className="card card-compact h-full bg-base-100 shadow-xl p-6">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body ">
          <h2 className=" text-2xl font-bold">{title}</h2>
          <div className="flex items-center ">
            <p className="text-xl font-semibold text-[#FF3811]">
              Price:{price}
            </p>
            <p className="text-xl font-semibold text-[#FF3811] text-end">
              <BsArrowRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
