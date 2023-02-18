const sellericon = require('../../assets/money-bag.gif')
function SellerCard(props){

	return (

		<div class="card rounded-md flex mb-28 flex-col mt-20 h-5/6 w-1/4 ml-40">
			<div class="">
				<h1 class="heading-items ml-6 my-6">Seller</h1>
			</div>
				<div class="flex overflow-hidden  h-full">
					<img  src={sellericon} class="scale-100  w-1/2 h-2/2  m-auto"/>
				</div>

			<div class="flex justify-center  h-full">
				<button  onClick={()=>{

					props.updateUserType("Seller")
					document.getElementById("login-modal").classList.toggle("hidden")

				}} class="front-page-buttons py-2 my-16 px-14">Sell</button>
			</div>
		</div>

		)
}

export default SellerCard