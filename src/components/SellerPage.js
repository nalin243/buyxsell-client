import Footer from "./Footer"
import Header from "./Header"
import SellerProfile from "./Sellerpage/SellerProfile"

import {useNavigate} from "react-router-dom"
import {useEffect} from "react"

function SellerPage(props) {

    const navigate = useNavigate()

    useEffect(()=>{
        if(!props.loginStatus)
            navigate("/home")
    })
        return ( 
            <div class="flex flex-col background-page min-h-screen w-screen flex">
                <Header page={"sellerpage"}/>
                <div class="flex flex-col justify-center h-screen w-screen">
                    <SellerProfile/>
                </div>
                <Footer/>
            </div>
         )
}

export default SellerPage;