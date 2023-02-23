import SearchBar from "./Buyerpage/Searchbar"
import SearchArea from "./Buyerpage/SearchArea"

import Footer from "./Footer"
import Header from "./Header"

import {useNavigate} from "react-router-dom"
import {useEffect,useState} from "react"

import axios from "axios"

function BuyerPage (props){

    const navigate = useNavigate()
    const [loading,updateLoading] = useState(true)
    const [username,updateUsername] = useState("")
 
    useEffect(()=>{
        if(!props.loginStatus){
                axios.get(process.env.REACT_APP_SERVER_URL+"authcheck",{
                headers: {
                    Authorization: localStorage.getItem("userTokenBuyer")
                }
            })
            .then((response)=>{
                if(!response.data.success)
                    navigate("/home")
                else{
                    updateUsername(response.data.user)
                    updateLoading(false)
                }
            })
            .catch((err)=>{
                if(err.response.data==="Unauthorized")
                    navigate("/home")
            })
        }
        else {
            updateLoading(false)
        }
    })
 
        if(!loading){
            return(
                <div class="flex flex-col background-page min-h-screen w-screen flex">
        			<Header user={props.user} page={"buyerpage"} />
                    <div class="flex flex-col justify-center h-screen w-screen">
                    <h1 class="flex m-auto -mb-22 justify-center buyer-page-pname ml-auto mt-auto">BUYxSELL</h1>
                        <SearchBar/>
                    </div>
                    <SearchArea/>
                    <Footer/>
                </div>
            )
        }
    
    
}

export default BuyerPage
