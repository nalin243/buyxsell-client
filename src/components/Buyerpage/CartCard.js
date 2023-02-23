function CartCard(props){
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
						<h1 class="product-name text-4xl ml-5 mt-4">Wardrobe</h1>
					</div>

					<div class="text-end w-full">
						<h1 class="product-name text-4xl mr-5 mt-4">Rs 989</h1>
					</div>
				</div>
				<div class="flex  text-justify h-full w-full">
					<h1 class="product-name text-4xl ml-5 mt-10">Randoma jldjalkfjklajfklajsfkljakljflkdajfljdaslfjklasjfklajsdf</h1>
				</div>
			</div>
		</div>

		)
}

export default CartCard