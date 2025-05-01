import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

export default function Checkout() {
    const {cartprods} = useCart()
    const navigate = useNavigate();

    const totalAmount = cartprods.reduce((acc,item)=>acc+(item.price * item.quantity),0)
    
    const handleConfirm = () => {
        navigate('/thankyou')
    }

    return (
        <div className="flex flex-col items-center mt-6 space-y-4">
            <p className="text-xl font-bold">Your Total is {totalAmount}</p>
            <button onClick={handleConfirm} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md" > Confirm Purchase </button>
        </div>
    )
}