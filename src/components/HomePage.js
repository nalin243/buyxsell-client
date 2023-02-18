import BuyerCard from "./Homepage/BuyerCard"
import SellerCard from "./Homepage/SellerCard"
import Footer from "./Footer"
import Header from "./Header"
import LoginModal from "./LoginModal"
import RegisterModal from "./RegisterModal";

import {useState} from 'react'

function HomePage(props){

	const [userType,updateUserType] = useState("")

	return (

		<div class="flex md:justify-end flex-col overflow-y-scroll background-page min-h-screen w-screen flex">
			<Header page={"homepage"} />
			<LoginModal userType={userType}/>
			<RegisterModal userType={userType}/>
			<div class="overflow-hidden  flex justify-center h-full">
				<BuyerCard updateUserType={updateUserType}/>
				<SellerCard updateUserType={updateUserType}/>
			</div>
			<Footer/>
		</div>

		)

}

export default HomePage
