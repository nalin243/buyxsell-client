import BuyerCard from "./Homepage/BuyerCard"
import SellerCard from "./Homepage/SellerCard"
import Footer from "./Footer"
import Header from "./Header"

function HomePage(props){

	return (

		<div class="flex md:justify-end flex-col overflow-y-scroll background-page min-h-screen w-screen flex">
			<Header homepage={true} />
			<div class="overflow-hidden  flex justify-center h-full">
				<BuyerCard/>
				<SellerCard/>
			</div>
			<Footer/>
		</div>

		)

}

export default HomePage