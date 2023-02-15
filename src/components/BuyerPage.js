import SearchBar from "./Buyerpage/Searchbar"
import Footer from "./Footer"
import Header from "./Header"

function BuyerPage (props){
    return(
        <div class="flex flex-col background-page min-h-screen w-screen flex">
			<Header homepage={false} />
            <div class="flex flex-col justify-center h-screen w-screen">
            <h1 class="flex m-auto -mb-22 justify-center buyer-page-pname ml-auto mt-auto">BUYxSELL</h1>
                <SearchBar/>
            </div>
            <Footer/>
        </div>
    )
    
}

export default BuyerPage