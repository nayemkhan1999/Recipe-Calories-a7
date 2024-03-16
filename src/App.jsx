import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Component/Header";
import NavBar from "./Component/NavBar";
import Recipes from "./Component/Recipes";
import SingleProduct from "./SingleProduct";

function App() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("fake-data.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProduct(data);
      });
  }, []);

  const handleClick = (e) => {
    setCart([...cart, e]);
  };
  console.log(cart);
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <Recipes></Recipes>

      {/* Card Section */}

      <div className="mx-20 mt-10 font-lexend flex gap-8">
        <div className="w-[70%] grid grid-cols-2 gap-4">
          {/* -----------Making Map--------- */}

          {product.map((pd) => (
            <SingleProduct
              pd={pd}
              key={pd.ind}
              handleClick={handleClick}
            ></SingleProduct>
          ))}
        </div>
        <div className="w-[30%] ">
          <div className=" h-auto border-2 rounded-lg ">
            <h1 className="border-b-2 text-center text-2xl font-bold">
              Want to cook: 01
            </h1>
            <table className="w-full divide-y-2  ">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody className="w-full text-center divide-y-2 text-xs  ">
                {cart.map((item, index) => {
                  return (
                    <tr key={item.ind}>
                      <td className="opacity-70">
                        <span className="font-bold text-sm">{index + 1} </span>
                        {item.description.slice(0, 20)} <br />
                      </td>
                      <td className="opacity-70">
                        {item.preparing_time} <br /> minutes
                      </td>
                      <td className="opacity-70">
                        {item.calories} <br /> calories
                      </td>
                      <button className="bg-[#0BE58A] rounded-full p-2  text-[10px]  ">
                        Preparing
                      </button>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
