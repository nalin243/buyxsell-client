function ItemCard(props){

	return (

		<div class="item-card m-8 mr-14 md:ml-14 xl:ml-16 flex flex-col rounded-xl md:h-3/6 md:w-4/12 xl:w-2/12 xl:h-3/6">
			<div class="px-5 bg-black py-7 my-3 rounded-full  m-auto h-5/6 w-7/12">
			</div>

			<div class="text-center">
				<h1 class="product-name text-white text-2xl m-auto">Item detail</h1>
			</div>

			<div class=" w-full h-full">
				<div>
					<h1 class="product-name text-2xl ml-2">100,000</h1>
				</div>

				<div>
					<h1 class="product-name text-black text-2xl ml-2 mt-2">Bhai ekdam tagda product hai ekbar lekar toh dekho bhai</h1>
				</div>
			</div>
		</div>

		)

}

export default ItemCard