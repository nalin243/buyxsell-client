import axios from "axios"

import Footer from "./Footer"
import Header from "./Header"
import SellerProfile from "./Sellerpage/SellerProfile"

import {useNavigate} from "react-router-dom"
import {useEffect,useState} from "react"

import url from "url"
import querystring from "querystring"

function SellerPage(props) {

    const navigate = useNavigate()
    const [loading,updateLoading] = useState(true)

    const username = querystring.parse(url.parse(document.URL).query).user

    useEffect(()=>{
        if(!props.loginStatus){
                axios.get(process.env.REACT_APP_SERVER_URL+"authcheck",{
                headers: {
                    Authorization: localStorage.getItem("userTokenSeller")
                }
            })
            .then((response)=>{
                if(!response.data.success)
                    navigate("/home")
                else
                    updateLoading(false)
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
            return ( 
                <div class="flex flex-col background-page min-h-screen w-screen flex">
                    <Header page={"sellerpage"}/>
                    <div class="flex flex-col justify-center h-screen w-screen">
                        <SellerProfile user={username}/>
                    </div>
                    <Footer/>
                </div>
             )
        }
}

export default SellerPage;