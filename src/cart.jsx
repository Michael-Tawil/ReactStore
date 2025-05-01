import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

export default function Cart() {

    const {cartprods, setCartprod, addprod, subprod, rmpro} = useCart()

    const handlerm = (id) => () => {
      rmpro(id);
    };
    const handleadd = (id) => () => {
      addprod(id);
    };
    const handlesub = (id) => () => {
      subprod(id);
    };
  
    console.log(cartprods);
  
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
  
        {cartprods.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartprods.map((item, index) => (
              <div
                key={item.id || index}
                className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
              >
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600 mt-1">Quantity: {item.quantity}</p>
                </div>
  
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleadd(item.id)}
                    className="bg-green-500 hover:bg-green-600 text-white rounded-md px-3 py-1"
                  >
                    +
                  </button>
                  <button
                    onClick={handlesub(item.id)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-md px-3 py-1"
                  >
                    -
                  </button>
                  <button
                    onClick={handlerm(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white rounded-md px-3 py-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
  
        {cartprods.length > 0 && (
          <div className="flex justify-center mt-10">
            <Link to ="/checkout" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg">
              Checkout
            </Link>
          </div>
        )}
      </div>
    );
  }
  