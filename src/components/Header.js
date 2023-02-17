import {useNavigate} from "react-router-dom"
function Header(props){

	const navigate = useNavigate()

	if(props.homepage){
		return (

			<div class="flex">
				<h1 class="justify-start product-name ml-20 mt-10">BUYxSELL</h1>
				<div class="flex pt-14 text-center justify-end w-full">
					<h2 class="nav-items mr-20 my-auto">ABOUT</h2>
					<h2 class="nav-items mr-20 my-auto">SIGN UP</h2>
				</div>
			</div>
			)
		}
		else {
			return (

				<div class="flex">
					<h1 class="justify-start product-name ml-20 mt-10">BxS</h1>
					<div class="flex pt-14 text-center justify-end w-full">
						<h2 class="nav-items mr-20 my-auto">Most Popular</h2>
						<h2 class="nav-items mr-20 my-auto">About Us</h2>
						<h2 class="nav-items mr-20 my-auto">Profile</h2>
						<button onClick={()=>{
							localStorage.removeItem("userToken")
							navigate("/home")
						}}><h2 class="nav-items mr-20 my-auto">Log Out</h2></button>
					</div>
				</div>
				)
		}
}

export default Header
