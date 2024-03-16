import { useEffect, useState } from "react";
import Recepe from "../Recepe/Recepe";

const Recepes = ({recipes,handleCook}) => {

  const [cooking, setCooking] = useState([]);

  useEffect(() => {
    fetch("fake-data.json")
      .then((res) => res.json())
      .then((data) => {
        setCooking(data);
      });
  }, []);
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      {cooking.map((cook, ind) => (
        <Recepe cook={cook} key={ind} handleCook={handleCook} ></Recepe>
      ))}
    </div>
  );
};

export default Recepes;
