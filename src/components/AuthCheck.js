import {useNavigate} from "react-router-dom"
import {useEffect} from "react"
import axios from "axios"

function AuthCheck(props){
	const navigate = useNavigate()

	useEffect(()=>{
		axios.get(process.env.REACT_APP_SERVER_URL+"authcheck",{
			headers: {
				Authorization: localStorage.getItem("userTokenBuyer")
			}
		})
		.then((response)=>{
			props.updateLoginStatus(true)
			if(response.data.userType==="Buyer"){
				navigate("/buyer?user="+response.data.user)
			}
			else if(response.data.userType==="Seller"){
				navigate("/seller?user="+response.data.user)
			}
		})
		.catch((err)=>{

			axios.get(process.env.REACT_APP_SERVER_URL+"authcheck",{
				headers: {
					Authorization: localStorage.getItem("userTokenSeller")
				}
			})
				.then((response)=>{
					props.updateLoginStatus(true)
					if(response.data.userType==="Buyer"){
						navigate("/buyer?user="+response.data.user)
					}
					else if(response.data.userType==="Seller"){
						navigate("/seller?user="+response.data.user)
					}
				})

				.catch((err)=>{
					props.updateLoginStatus(false)
					if(err.response.data === "Unauthorized"){
						navigate("/home")
					}
				})
		})
	},[])
}

export default AuthCheck