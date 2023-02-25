const carticon = require('../../assets/shopping-cart(1).png')

import Header from "../Header"
import Footer from "../Footer"
import CartCard from "./CartCard"

import axios from "axios"
import {useEffect,useState} from "react"
import {useNavigate} from "react-router-dom"

function Cart(props){
	const navigate = useNavigate()
    const [loading,updateLoading] = useState(true)
    const [cart,updateCart] = useState(null)
    const [total,updateTotal] = useState(0)
    const [itemCount,updateItemCount] = useState(0)
    const [user,updateUser] = useState("")

    useEffect(()=>{
      axios.get(process.env.REACT_APP_SERVER_URL+"authcheck",{
                headers: {
                    Authorization: localStorage.getItem("userTokenBuyer")
                }
            })
            .then((response)=>{
            	updateUser(response.data.user)
                if(!response.data.success)
                    navigate("/home")
                else{
                    updateLoading(false)
                    axios.get(process.env.REACT_APP_SERVER_URL+"cart?user="+response.data.user,{
                    	headers: {
                    		Authorization: localStorage.getItem("userTokenBuyer")
                    	}
                    })
                    	.then((response)=>{
                    		if(response.data.success){
                    			updateItemCount(response.data.cart.length)
                    			updateTotal(response.data.cart.reduce((total,item)=>{
                    				return total+item.price
                    			},0) )
                    			updateCart((response.data.cart).map((item)=>{
                    				return <CartCard updateItemCount={updateItemCount} updateTotal={updateTotal} updateCart={updateCart} user={response.data.user} id={item._id} name={item.name} price={item.price} description={item.description}/>
                    			}))
                    		}
                    	})
                }
            })
            .catch((err)=>{
                if(err.response.data==="Unauthorized")
                    navigate("/home")
            })
    },[])

    if(!loading){
    return (
    	<div class="flex flex-col background-page min-h-screen w-screen flex">
    		<Header user={user} page={"cartpage"}/>
	    		<div class="flex justify-center h-screen w-screen mt-10">

	    			<div class="modal-card flex bg-white h-5/6 w-9/12 rounded-md m-5 ml-10">
	    				<div class="flex flex-col h-full w-full">
	    					<div class="flex h-2/6 w-full">
	    						<div class="flex text-start w-full h-4/6 border-b-2 border-blue-400 ml-10 mt-5">
	    							<img class="ml-6 mt-1 h-20 w-20" src={carticon} />
	    							<h1 class="m-auto ml-6 mt-4 product-name text-5xl">Shopping cart</h1>
	    						</div>

	    						<div class="w-full text-end h-4/6 border-b-2 border-blue-400 mr-10 mt-5">
	    							<h1 class="m-auto mr-6 mt-6 product-name text-4xl">Items: {itemCount}</h1>
	    						</div>
	    					</div>

	    					<div class="flex overflow-y-scroll flex-col h-full w-full px-10">
	    						{cart}
	    					</div>
	    				</div>
	    			</div>

	    			<div class="modal-card bg-white flex h-3/6 w-2/12 rounded-md m-5 mr-10">
	    				<div id="carddelbuttondiv" class="flex-col h-full w-full text-center ">
	    					<h1 class="m-auto m-4 mx-8 product-name text-5xl mt-3">Subtotal: {total}</h1>
	    					<button class="modal-button py-3 text-black rounded-md mt-20 px-12">Pay</button>
	    				</div>
	    			</div>

	    		</div>
    		<Footer/>
    	</div>
    	)
	}
}

export default Cart