import { URL } from "../config/config";
import { useEffect, useState } from "react";

const useServices = () => {
  const [Services, setServices] = useState([]);
  useEffect(() => {
    fetch(`${URL}services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return Services;
};

export default useServices;
