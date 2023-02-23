import HomePage from "./HomePage"
import BuyerPage from "./BuyerPage"
import SellerPage from "./SellerPage";
import AuthCheck from "./AuthCheck"

import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import {useState} from "react"

function App(props){

	const [loginStatus,updateLoginStatus] = useState(false)
	const [user,updateUser] = useState("")

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element = {<AuthCheck updateUser={updateUser} updateLoginStatus={updateLoginStatus}/>}></Route>
				<Route path="/home" element={<HomePage updateUser={updateUser} updateLoginStatus={updateLoginStatus}/>}></Route> 
				<Route path="/buyer" element={<BuyerPage updateUser={updateUser} user={user} loginStatus={loginStatus}/>}></Route>
				<Route path="/seller" element={<SellerPage updateUser={updateUser} user={user} loginStatus={loginStatus}/>}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
