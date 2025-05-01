import { Routes, Route } from "react-router-dom";
import { useState,useEffect } from "react";
import Products from "./Products"
import Productdeets from "./Productdeet";
import Nav from "./Nav";
import Cart from "./cart";
import Checkout from "./Checkout";
import Thankyou from "./Thankyou";
import Login from "./Login";
import Protectedroutes from "./Protectedroutes";
import Errorpage from "./Errorpage";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "./CartContext";
import { useCart } from "./CartContext";

export default function App(){

    
    const [loggedIn,setLoggedin] = useState(()=>{
        const isloggedin = localStorage.getItem("isloggedin")
        return isloggedin ? JSON.parse(isloggedin) : false
    })

    const [searchquery,setSearchquery] = useState("")

    

    useEffect(()=>{
        localStorage.setItem("isloggedin",JSON.stringify(loggedIn))
    },[loggedIn])

    
    return (
        <CartProvider>
    <>
        <ToastContainer position="top-right" autoClose={2000}/>
         <Nav searchquery={searchquery} setSearchquery={setSearchquery} loggedIn={loggedIn} setLoggedin={setLoggedin}/>
        <Routes>
            <Route path="/" element={<Products searchquery={searchquery}/>} />
            <Route path="/Productdeets/:id" element={<Productdeets/>} />
            <Route path="/Cart" element={<Protectedroutes loggedIn={loggedIn}><Cart/></Protectedroutes>} />
            <Route path="/checkout" element={<Protectedroutes loggedIn={loggedIn}><Checkout/></Protectedroutes>}/>
            <Route path="/thankyou" element={<Protectedroutes loggedIn={loggedIn}><Thankyou/></Protectedroutes>}/>
            <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedin={setLoggedin}/>}/>
            <Route  path="*" element={<Errorpage/>}/>
        </Routes>
    </>
    </CartProvider>
    )
}