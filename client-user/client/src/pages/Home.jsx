import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fecthItems } from "../actions/actionCreators";
import { NavLink } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  // Fetch data from Redux store
  const items = useSelector((state) => state.items.items);

  // Fetch data when component mounted
  useEffect(() => {
    dispatch(fecthItems());
  }, [dispatch]);

  return (
    <div className="bg-gray-100">
      {/* Header */}
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          {/* ... */}
        </div>
      </section>

      {/* Menu Section */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">Our Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div className="bg-white rounded-lg shadow-md" key={item.id}>
                <img
                  src={item.image}
                  alt="Menu Item"
                  className="w-full rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold">{item.price}</span>
                    <NavLink
                      to={`/items/${item.id}`}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-md"
                    >
                      See Detail Product
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
    </div>
  );
};

export default Home;