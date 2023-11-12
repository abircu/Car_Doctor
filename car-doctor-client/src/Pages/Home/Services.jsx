import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [Services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="py-4 md:py-6 lg:py-10">
      <h1 className="text-xl font-semibold text-red-500 text-center mt-10">
        Services
      </h1>
      <h2 className="text-3xl font-bold text-center">Our Service Area</h2>
      <p className="text-center">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
        <br />
        obcaecati sit quae earum, quidem exercitationem <br />
        cumque commodi cum itaque.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 p-6">
        {Services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
