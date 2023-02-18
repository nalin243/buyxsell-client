import Footer from "./Footer"
import Header from "./Header"
import DashBoard from "./Sellerpage/DashBoard";

function SellerPage(props) {
    return ( 
        <div class="flex flex-col background-page min-h-screen w-screen flex">
            <Header page={"sellerpage"}/>
            <div class="flex flex-col justify-center h-screen w-screen">
                <DashBoard/>
            </div>
            <Footer/>
        </div>
     );
}

export default SellerPage;