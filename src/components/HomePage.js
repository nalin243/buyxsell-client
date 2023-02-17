import BuyerCard from "./Homepage/BuyerCard"
import SellerCard from "./Homepage/SellerCard"
import Footer from "./Footer"
import Header from "./Header"
import LoginModal from "./LoginModal"

import {useState} from 'react'

function HomePage(props){

	const [loginUserType,updateLoginUserType] = useState("")

	return (

		<div class="flex md:justify-end flex-col overflow-y-scroll background-page min-h-screen w-screen flex">
			<Header homepage={true} />
			<LoginModal loginUserType={loginUserType}/>
			<div class="overflow-hidden  flex justify-center h-full">
				<BuyerCard updateLoginUserType={updateLoginUserType}/>
				<SellerCard updateLoginUserType={updateLoginUserType}/>
			</div>
			<Footer/>
		</div>

		)

}

export default HomePage
