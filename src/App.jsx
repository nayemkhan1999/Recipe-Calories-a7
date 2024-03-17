import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import Cooking from "./Component/Cooking/Cooking";
import Header from "./Component/Header";
import NavBar from "./Component/NavBar";
import OurRecipes from "./Component/OurRecipes";
import Recepes from "./Component/Recepes/Recepes";

import "react-toastify/dist/ReactToastify.css";
import Footer from "./Component/Footer/Footer";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [cooking, setCooking] = useState([]);

  const handleCook = (recipe) => {
    const newRecipe = [...recipes, recipe];

    const isExisted = recipes.find((idx) => idx.id == recipe.id);

    if (!isExisted) {
      setRecipes(newRecipe);
    } else {
      toast("all ready exist!");
    }
  };

  const handleRemove = (id) => {
    const isExisted = recipes.filter((idx) => idx.id !== id);
    setRecipes(isExisted);
  };

  const handleCooking = (cook) => {
    const newCook = [...cooking, cook];
    setCooking(newCook);
    // setCooking([...recipes,cook])
  };
  console.log(cooking);

  return (
    <div>
      <NavBar></NavBar>
      <Header></Header>
      <OurRecipes></OurRecipes>
     
      <div className=" lg:mx-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
          <div className="col-span-4  ">
            <Recepes handleCook={handleCook} recipes={recipes}></Recepes>
          </div>
          <div className="col-span-2  border-2 mt-16 rounded-xl">
            <Cooking
              recipes={recipes}
              handleRemove={handleRemove}
              handleCooking={handleCooking}
              cooking={cooking}
            ></Cooking>
          </div>
        </div>
        <ToastContainer />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
