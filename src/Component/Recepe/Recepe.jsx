const Recepe = ({ cook,handleCook }) => {
  const { image, name, description, Ingredients, preparing_time, calories } =
    cook;
  return (
    <div className="mt-16 font-lexend">
      <div className="card card-compact h-full w-[380px] bg-base-100 border-2">
        <figure className="p-4">
          <img className="rounded-[20px]" src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-base lg:text-2xl font-bold">
            {name}
          </h2>
          <p className="text-xs lg:text-base text-[#878787] ">
            {description}
          </p>
          <div className="divider"></div>
          <h2 className="text-base lg:text-xl font-semibold">Ingredients: 6</h2>
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
          <div className="divider"></div>
          <div className="flex gap-8 mb-4">
            <div className="flex items-center gap-2 text-sm lg:text-lg font-medium  text-[#878787]">
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
              <p>{preparing_time} minutes</p>
            </div>
            <div className="flex items-center gap-2 text-sm lg:text-lg font-medium  text-[#878787]">
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
              <p>{calories} calories</p>
            </div>
          </div>
          <div className="card-actions justify-right">
            <button onClick={()=> handleCook(cook)}
            className="text-sm lg:text-lg font-semibold bg-[#15d1aa] rounded-full px-6 hover:bg-[#008DDA] py-3 text-[#150B2B]">
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recepe;
