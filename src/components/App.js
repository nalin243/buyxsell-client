import HomePage from "./HomePage"
import BuyerPage from "./BuyerPage"
import SellerPage from "./SellerPage";
import AuthCheck from "./AuthCheck"

import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import {useState} from "react"

function App(props){

	const [loginStatus,updateLoginStatus] = useState(false)

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element = {<AuthCheck updateLoginStatus={updateLoginStatus}/>}></Route>
				<Route path="/home" element={<HomePage updateLoginStatus={updateLoginStatus}/>}></Route> 
				<Route path="/buyer" element={<BuyerPage loginStatus={loginStatus}/>}></Route>
				<Route path="/seller" element={<SellerPage loginStatus={loginStatus}/>}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
