const signouticon = require("../assets/logout.png")
const logoicon = require('../assets/logo.png')

import { useNavigate } from "react-router-dom"

function Header(props){

	const navigate = useNavigate()

	if(props.page==="homepage"){
		return (

			<div class="flex">
				<h1 class="justify-start product-name ml-20 mt-10">BUYxSELL</h1>
				<div class="flex pt-14 text-center justify-end w-full">
					<h2 class="nav-items mr-20 my-auto">ABOUT</h2>
					<button onClick={()=>{
						document.getElementById("register-modal").classList.toggle("hidden")
					}}>
						<h2 class="nav-items mr-20 my-auto">SIGN UP</h2>
					</button>
				</div>
			</div>
			)
		}
		else if(props.page==="buyerpage") {
			return (

				<div class="flex">
					<img class="justify-start md:mt-2 md:-ml-1 xl:mt-4 xl:ml-7 w-50 h-40" src={logoicon}/>
					<div class="flex pt-14 text-center justify-end w-full">
						<h2 class="nav-items mr-20 my-auto">Most Popular</h2>
						<h2 class="nav-items mr-20 my-auto">About Us</h2>
						<h2 class="nav-items mr-20 my-auto">Profile</h2>
						<button onClick={()=>{
							localStorage.removeItem("userTokenBuyer")
							navigate("/home")
						}}><h2 class="nav-items mr-20 my-auto">Log Out</h2></button>
					</div>
				</div>
				)
		}
		else if(props.page==="sellerpage") {
			return (

				<div class="flex z-10 sellerpage-bg w-full h-full">
					<div class="flex justify-start pl-20 ml-5 w-1/2 h-full py-4">
						<img onClick={()=>{
							navigate("/home")
						}} class="h-20 w-20 scale-150 -mt-2 hover:cursor-pointer" src={logoicon}/>
					</div>
					<div class="flex ml-8 mt-3 w-full justify-center">
						<input type="search" id="default-search" class="flex border border-gray-900 bg-gray-200 w-full p-3 pl-2 rounded-lg placeholder-gray-400 m-auto" placeholder="Search Account..." required/>
					</div>
					<div class="flex justify-end w-1/2">
						<img class="hover:cursor-pointer pr-2 mr-2 mt-11 h-5 w-7" src={signouticon}/>
						<button onClick={()=>{
							localStorage.removeItem("userTokenSeller")
							navigate("/home")
						}}><h2 class="nav-items text-black mr-8 my-auto">Sign Out</h2></button>
					</div>
				</div>

			)
		}
}

export default Header
