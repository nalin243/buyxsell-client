import SearchBar from "./Buyerpage/Searchbar"
import SearchArea from "./Buyerpage/SearchArea"

import Footer from "./Footer"
import Header from "./Header"

function BuyerPage (props){
    return(
        <div class="flex border-2 scroll-smooth flex-col background-page min-h-screen w-screen">
			<Header page={"buyerpage"} />

            <div class="flex flex-col justify-center h-screen w-screen">
            <h1 id="buyerpage-product-name" class="flex m-auto -mb-22 justify-center buyer-page-pname ml-auto mt-auto">BUYxSELL</h1>
                <SearchBar/>
            </div>

            <div id="buyerpage-scroll-div" class="flex flex-col md:-mt-72  border-2 border-yellow-400 min-h-screen w-screen">
                <SearchArea/>
            </div>

            <Footer/>
        </div>
    )
    
}

export default BuyerPage