const Cooking = ({ recipes, handleRemove, handleCooking, cooking }) => {
  return (
    <div>
      <h2 className="text-center font-bold text-2xl border-b-2 pb-3  font-lexend">
        Want to cook: {recipes.length}
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>time</th>
                <th>coloris</th>
              </tr>
            </thead>
            <tbody>
              {recipes.map((item, index) => (
                <tr key={item.id}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.preparing_time} minutes</td>
                  <td>{item.calories} calories</td>
                  <td>
                    <button
                      onClick={() => {
                        handleRemove(item.id);
                        handleCooking(item);
                      }}
                      className="bg-primary text-white  text-[10px] px-1 py-2 rounded-full"
                    >
                      prepearing
                    </button>
                  </td>
                </tr>
              ))}
              {/* row 1 */}
            </tbody>
          </table>
        </div>
        <h1 className="text-center font-bold text-2xl mt-10 border-b-2 pb-3 font-lexend">
          Currently cooking: {cooking.length}
        </h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>time</th>
                <th>coloris</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cooking.map((display, index) => (
                <tr key={display.ind}>
                  <th>{index + 1}</th>
                  <td>{display.name}</td>
                  <td>{display.preparing_time} minutes</td>
                  <td>{display.calories} calories</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cooking;
