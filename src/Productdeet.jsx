import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"
import { toast } from "react-toastify";
import { useCart } from "./CartContext";

export default function Productsdeets(){
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const {cartprods, setCartprod} = useCart()

    useEffect(()=>{
            async function fetchproduct() {
               
                let fetchpro = await fetch(`https://fakestoreapi.com/products/${id}/`);
                let prodata = await fetchpro.json();
                setProduct(prodata)
                }
                fetchproduct()
        },[id])

        if (!product) {
            return (
              <div className="flex justify-center items-center h-48">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            );
          }
    
          return (
            <div className="p-6 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="flex justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full max-w-xs object-contain"
                  />
                </div>
          
                {/* Info */}
                <div className="text-center md:text-left space-y-4">
                  <h3 className="text-xl font-semibold">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-lg font-bold">${product.price}</p>
                  <button
                    className="bg-green-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
                    onClick={() => {
                      setCartprod([...cartprods, { ...product, quantity: 1 }]);
                      toast("Item added to cart!");
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
}