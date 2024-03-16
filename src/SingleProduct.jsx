const SingleProduct = ({ pd, handleClick }) => {
  const { image, name, description, Ingredients } = pd;
  return (
    <div>
      <div className="h-full border-2 p-5 rounded-lg">
        <img className="rounded-lg" src={image} alt="" />
        <h1 className="font-bold text-2xl text-center mt-2">{name}</h1>
        <p className="opacity-50 text-sm">{description}</p>
        <ul
          style={{
            listStyleType: "disc",
            fontSize: "17px",
            color: "#878787",
            marginLeft: "18px",
            lineHeight: "30px",
          }}
        >
          <li>{Ingredients[0]}</li>
          <li>{Ingredients[1]}</li>
          <li>{Ingredients[2]}</li>
          <li>{Ingredients[3]}</li>
        </ul>
        <div className="flex gap-5 mt-3">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <p> preparing time</p>
          </div>

          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
              />
            </svg>

            <p>calories</p>
          </div>
        </div>
        <button onClick={()=> handleClick(pd)} className="bg-[#0BE58A] rounded-full p-5 font-medium  mt-5 ">
          Want to Cook
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
