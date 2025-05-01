import { useState } from "react"
import { useNavigate,Navigate } from "react-router-dom"
import { toast } from "react-toastify"
export default function Login({loggedIn,setLoggedin}){

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    const handlelogin = () => {
        if (username == "michael" && password == "max") {
            setLoggedin(true)
            toast("Logged in successfully!!!")
            navigate('/')}
            else{
                alert("Incorrect credentials");
            }
    }

    return(
        <div className="flex flex-col item-center mt-6 space-y-4">
            <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handlelogin}>Login</button>
        </div>
    )
}