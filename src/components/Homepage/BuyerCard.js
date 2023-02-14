const buyericon = require("../../assets/shopping-cart.gif")
function BuyerCard(props){

	return (

		<div class="card rounded-md mb-28 flex flex-col mt-20  h-5/6 w-1/4">
			<div class="">
				<h1 class="heading-items ml-6 my-6">Buyer</h1>
			</div>
			<div class="flex justify-center overflow-hidden  h-full">
				<img  src={buyericon} class="scale-100 w-1/2 h-2/2  m-auto"/>

			</div>

			<div class="flex justify-center  h-full">
				<button class="front-page-buttons my-16 px-14 py-2">Buy</button>
			</div>
		</div>

		)
}

export default BuyerCard