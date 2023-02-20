import HomePage from "./components/HomePage"
import BuyerPage from "./components/BuyerPage"
import SellerPage from "./components/SellerPage";
import AuthCheck from "./components/AuthCheck"
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"

const ReactDOM = require("react-dom/client")
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
		<BrowserRouter>
			<Routes>
				{/* <Route path="/" element = {<AuthCheck/>}></Route> */}
				<Route path="/home" element={<HomePage/>}></Route> 
				<Route path="/buyer" element={<BuyerPage/>}></Route>
				<Route path="/seller" element={<SellerPage/>}></Route>
				<Route path="/" element={<SellerPage/>}></Route>
			</Routes>
		</BrowserRouter>
	)
