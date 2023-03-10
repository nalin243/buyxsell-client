const carticon = require('./../assets/shopping-cart-white.png')

import axios from "axios"

function ItemCard(props){

	const item = {
		name: props.name,
		price: props.price,
		description:props.description,
		user: props.user,
		sellername: props.sellername
	}

	function addToCart(){
		axios.put(process.env.REACT_APP_SERVER_URL+"addtocart",item,{
			headers:{
				Authorization: localStorage.getItem("userTokenBuyer")
			}
		})
			.then((response)=>{
				alert("Added to cart")
			})
	}

	if (props.comploc==="buyer"){

		return (

			<div class="item-card m-8 mr-14 md:ml-14 xl:ml-16 flex flex-col rounded-xl md:h-3/6 md:w-4/12 xl:w-3/12 xl:h-5/6">

				<div class="px-5 bg-black py-7 my-3 mt-7 m-auto h-5/6 w-10/12">
				</div>

				<div class="text-center">
					<h1 class="product-name text-black text-2xl m-auto mb-1 font-extrabold">{props.name}</h1>
				</div>

				<div class="flex flex-col w-full h-full">
					<div class="m-auto text-start h-3/6 w-5/6 overflow-hidden">
						<h1 class="product-name text-black text-2xl ml-2 mt-2 px-5 font-normal">{props.description}</h1>
					</div>

					<div class="text-center">
						<h1 class="product-name font-black text-2xl mb-2">Rs {props.price}</h1>
					</div>

					<div class="flex justify-center mt-2 mb-5">
						<div onClick={addToCart} class="flex hover:cursor-pointer justify-end bg-black -mt-2 py-3 rounded-md w-3/6 ">
							<h1 class="mr-4 text-white">Add to cart</h1>
							<img class="h-6 w-6 mr-8" src={carticon}/>
						</div>
					</div>
				</div>
			</div>
		)
	}

	else {
		return (

			<div class="item-card shrink-0 m-8 mr-14 md:ml-14 xl:ml-16 flex flex-col rounded-xl md:h-5/6 md:w-5/12 xl:w-2/12 xl:h-5/6">

				<div class="px-5 bg-black py-7 my-3 m-auto md:h-5/6 xl:h-5/6 md:w-9/12 xl:w-10/12">
				</div>

				<div class="text-center mb-4">
					<h1 class="product-name font-black text-2xl m-auto">{props.name}</h1>
				</div>

				<div class="flex flex-col w-full h-full">

					<div class="overflow-y-scroll h-1/2 w-full flex">
						<h1 class="product-name text-black font-medium text-2xl ml-2 mt-2">{props.description}</h1>
					</div>

					<div class="flex">
						<h1 class="product-name text-black text-2xl ml-2 mt-2">Sold to: {props.soldto}</h1>
					</div>

					<div class="flex text-center w-full mt-2">
						<h1 class="product-name m-auto text-2xl ">Rs {props.price}</h1>
					</div>
				</div>
			</div>

		)
	}			
}

export default ItemCard