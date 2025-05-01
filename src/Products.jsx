import { useState,useEffect } from "react"
import { Link } from "react-router-dom";

export default function Products({searchquery}){

    const [prodarr, setProdarr] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        async function Getproducts() {
            setLoading(true);
            setError(null);
            try {
              let parray = [];
              for (let i = 1; i <= 12; i++) {
                let response = await fetch(`https://fakestoreapi.com/products/${i}`);
                if (!response.ok) {
                  throw new Error("Failed to fetch product: " + i);
                }
                let { id, image, title, price } = await response.json();
                parray.push({ id, proimg: image, protitle: title, proprice:price });
              }
              setProdarr(parray);
            } catch (err) {
              console.error(err);
              setError(err.message || "Something went wrong");
            } finally {
              setLoading(false);
            }
          }
        
          Getproducts();
        }, []);

        const filteredProducts = prodarr.filter((item) =>
            item.protitle.toLowerCase().includes(searchquery.toLowerCase())
          );

          if (loading) {
            return (
              <div className="flex justify-center items-center h-48">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            );
          }
    
      if (error) {
        return <p style={{ color: "red" }}>Error: {error}</p>;
      }
    
      return (
        <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((item) => (
          <Link to={`/Productdeets/${item.id}`} key={item.id} className="block">
            <div className="bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition duration-300">
              <img
                src={item.proimg}
                alt={item.protitle}
                className="h-48 w-full object-contain p-4"
              />
              <div className="p-4">
                <h2 className="text-gray-800 font-semibold text-lg truncate">{item.protitle}</h2>
                <p className="text-gray-600 mt-2">${item.proprice}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}