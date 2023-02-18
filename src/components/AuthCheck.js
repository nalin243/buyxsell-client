import {useNavigate} from "react-router-dom"
import {useEffect} from "react"
import axios from "axios"

function AuthCheck(props){
	const navigate = useNavigate()

	useEffect(()=>{
		axios.get(process.env.REACT_APP_SERVER_URL+"authcheck",{
		headers: {
			Authorization: localStorage.getItem("userToken")
		}
	})
		.then((response)=>{
			navigate("/buyer?user="+response.data.user)
		})
		.catch((err)=>{
			if(err.response.data === "Unauthorized"){
				navigate("/home")
			}
		})
	},[])
}

export default AuthCheck