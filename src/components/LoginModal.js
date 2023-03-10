import axios from "axios"
axios.defaults.withCredentials=false

import {useNavigate} from "react-router-dom"

import {useEffect} from "react"
import {useState} from "react"

const cancelicon = require('../assets/cancel.png')

function LoginModal(props){

	const navigate = useNavigate()
	const [loginStatus,updateLoginStatus] = useState("")

	function handleLogin(){

		const data = {
			username: document.getElementById("username").value, 
			password: document.getElementById("password").value,
			userType:props.userType
		}

		axios.post(process.env.REACT_APP_SERVER_URL+"login",data)
			.then((response)=>{
				if(response.data.success){
					props.updateLoginStatus(true)
					props.updateUser(response.data.user)
					localStorage.setItem("userToken"+response.data.userType,response.data.token)
					if(props.userType=="Buyer"){
						navigate("/buyer")
					}
					else if(props.userType==="Seller"){
						navigate("/seller")
					}
				}
			})
			.catch((err)=>{
				props.updateLoginStatus(false)
				if(!err.response.data.success){
					updateLoginStatus(err.response.data.message+"!")
				}
			})
	}

	return (

		<div class="fixed hidden backdrop-blur-sm z-10 justify-center inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full" id="login-modal">
			<div class="flex flex-col modal-card  relative m-auto mt-40 h-4/6 xl:w-1/4 sm:w-2/4">
				<button onClick={()=>{
					document.getElementById("username").value = ""
					document.getElementById("password").value = ""
					updateLoginStatus("")
					document.getElementById("login-modal").classList.toggle("hidden")

				}}>
				<img class="z-10 cancel-icon hover:cursor-pointer h-5 w-5 mt-4 ml-4" src={cancelicon}/>
				</button>
				<h1 class="m-auto product-name mt-6 text-6xl">{props.userType} Login</h1>				
				<div class="flex flex-col justify-center h-full -mt-5">
					<input id="username"  type="text" placeholder="johndoe@gmail.com" class="modal-input w-4/6 border-b-4 rounded-sm border-black mx-auto mt-20 mb-10"/>
					<input id="password" type="password" placeholder="***********" class="modal-input w-4/6 border-b-4 rounded-sm border-black mx-auto mt-4"/>
				</div>

				<div class="flex flex-col justify-center h-full">
					<button onClick={handleLogin} class="modal-button text-black rounded-3xl px-12 py-3 m-auto mt-18">Login</button>
					<h1 class="m-auto -mt-8 pb-5 italic">{loginStatus}</h1>
					<button onClick={()=>{
						document.getElementById("register-modal").classList.toggle("hidden")
						document.getElementById("login-modal").classList.toggle("hidden")
						updateLoginStatus("")
					}}>
					<h1 class="m-auto -mt-14 italic underline">New to BxS? Create Account</h1>
					</button>
				</div>
			</div>
		</div>

		)

}

export default LoginModal
