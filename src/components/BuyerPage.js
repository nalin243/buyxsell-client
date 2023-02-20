import SearchBar from "./Buyerpage/Searchbar"
import SearchArea from "./Buyerpage/SearchArea"

import Footer from "./Footer"
import Header from "./Header"

import {useNavigate} from "react-router-dom"
import {useEffect} from "react"

function BuyerPage (props){

    const navigate = useNavigate()

    useEffect(()=>{
        if(!props.loginStatus)
            navigate("/home")
    })

        return(
            <div class="flex flex-col background-page min-h-screen w-screen flex">
    			<Header page={"buyerpage"} />
                <div class="flex flex-col justify-center h-screen w-screen">
                <h1 class="flex m-auto -mb-22 justify-center buyer-page-pname ml-auto mt-auto">BUYxSELL</h1>
                    <SearchBar/>
                </div>
                <SearchArea/>
                <Footer/>
            </div>
        )
    
    
}

export default BuyerPage
