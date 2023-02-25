const removeicon = require('../../assets/remove.png')
import axios from "axios"

function CartCard(props){
	function handleDeletion(){
		axios.delete(process.env.REACT_APP_SERVER_URL+"cartitem"+"?username="+props.user+"&id="+props.id,{
			headers:{
				Authorization: localStorage.getItem("userTokenBuyer")
			}
		})
			.then((response)=>{
				if(response.data.success){
					props.updateItemCount(response.data.cart.length)
                    props.updateTotal(response.data.cart.reduce((total,item)=>{
                    	return total+item.price
                    },0) )
					props.updateCart((response.data.cart).map((item)=>{
                    	return <CartCard updateTotal={props.updateTotal} updateItemCount={props.updateItemCount} updateCart={props.updateCart} user={props.user} id={item._id} name={item.name} price={item.price} description={item.description}/>
                    }))
				}
			})
	}


	return (

		<div class="flex shrink-0 border-b-2 border-blue-400 mb-10 h-4/6 w-full">
			<div class="flex h-full w-2/6 ">
				<div class="flex m-auto bg-black rounded-sm mx-1 h-5 w-5">
				</div>

				<div class="flex rounded-md ml-5 h-5/6 bg-black w-full border-2 border-black">

				</div>
			</div>

			<div class="flex flex-col  h-full w-full">
				<div class="flex  h-2/6 w-full">
					<div class="text-start w-full">
						<h1 class="product-name text-4xl ml-5 mt-4">{props.name}</h1>
					</div>

					<div class="text-end w-full">
						<h1 class="product-name text-4xl mr-5 font-medium mt-4">Rs {props.price}</h1>
					</div>
				</div>
				<div class="flex  text-start h-full w-full">
					<h1 class="product-name font-medium text-4xl ml-5 mt-10">{props.description}</h1>
				</div>
				<div class="flex justify-end h-1/6 w-full mb-5">
					<div class="flex justify-center">
						<button onClick={handleDeletion} class="modal-button text-black mr-4 font-medium px-10 rounded-md  py-3 m-auto">Remove from cart</button>
					</div>
				</div>
			</div>
		</div>

		)
}

export default CartCard