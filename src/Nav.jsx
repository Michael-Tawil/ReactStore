import logo from './assets/react.svg'
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useCart } from './CartContext';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Nav({searchquery,setSearchquery,loggedIn,setLoggedin,cartCount}){

    const {cartprods} = useCart()

    const handlelogout = () => {
        setLoggedin(false)
        toast("Logged out :(")
    }

    return(
        <>
            <nav className="bg-gray-800 p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <Link to="/"><img src={logo} alt="website logo" /></Link>
                <div className="relative w-full md:w-1/3">
                <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                        name="search" 
                        type="text" 
                        value={searchquery} 
                        onChange={(e)=> setSearchquery(e.target.value)} 
                        className="w-full md:w-1/3 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"/>
                </div>
                
                {loggedIn ?(<>

            <div className="relative"><Link to="/cart" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Cart</Link>{cartprods.length > 0 && <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">{cartprods.length}</span>}</div>
            <button onClick={handlelogout}>Logout</button>
            </>):(<Link to="/login">Login</Link>)}
            </nav>
        </>
    )
}