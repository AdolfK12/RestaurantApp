import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchItemsIdMiddleware } from '../actions/actionCreators'; // replace with your actual actions file

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // assuming you're using react-router and the id is passed as a url parameter
  const { items } = useSelector((state) => state.itemsId);
  const errorMessage = useSelector((state) => state.itemsIdReducer?.errorMessage);

  useEffect(() => {
    dispatch(fetchItemsIdMiddleware(id));
  }, [dispatch]);

  if (errorMessage) {
    return <div>Error: {errorMessage}</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      {/* Header */}
      {/*...*/}

      {/* Product Detail */}
      <section className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col lg:flex-row items-start">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <img
              src={items.image} // assuming the image url is stored in the `image` property
              alt="Product"
              className="w-full h-64 object-cover object-center rounded-md shadow"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">{items.name}</h2>
            <p className="text-gray-600 mb-6">{items.description}</p>
            <span className="text-2xl font-bold text-red-500">Rp {items.price}</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/*...*/}
    </div>
  );
};

export default ProductDetail;
