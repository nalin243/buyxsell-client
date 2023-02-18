import HomePage from "./components/HomePage"
import BuyerPage from "./components/BuyerPage"
import SellerPage from "./components/SellerPage";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"

const ReactDOM = require("react-dom/client")
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
		<BrowserRouter>
			<Routes>
				 {/* <Route path="/" element={<HomePage/>}></Route> 
				 <Route path="/" element={<BuyerPage/>}></Route> */}
				 <Route path="/" element={<SellerPage/>}></Route>
			</Routes>
		</BrowserRouter>
	)