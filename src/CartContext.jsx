import { createContext,useContext,useState } from "react";

const CartContext = createContext()

export function CartProvider ({children}){

    const [cartprods, setCartprod] = useState(()=>{
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    })

    //useEffect(()=>{
            //localStorage.setItem("cart",JSON.stringify(cartprods))
       // },[cartprods])

        const rmpro = (id) => {
            setCartprod(prevcart => prevcart.filter((item)=> item.id !== id))
        }
    
        const addprod = (id) => {
            setCartprod(prevcart => prevcart.map((item)=> item.id === id ?{...item,quantity: item.quantity + 1}:item))
        }
    
        const subprod = (id) => {
            
            setCartprod(prevcart => prevcart.map((item)=> item.id === id ?{...item,quantity: item.quantity > 1 ? item.quantity - 1 : 1}:item))
        }
    
        return (
            <CartContext.Provider value={{ cartprods, setCartprod, addprod, subprod, rmpro }}>
              {children}
            </CartContext.Provider>
          );

}
export function useCart() {
    return useContext(CartContext);
  }
