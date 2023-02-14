function LoginModal(props){

	return (

		<div class="fixed hidden z-10 justify-center inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
			<div class="flex flex-col modal-card  relative m-auto mt-40 h-4/6 xl:w-1/4 sm:w-2/4">
				<div class="flex flex-col justify-center h-full ">
					<input  type="text" placeholder="johndoe@gmail.com" class="modal-input w-4/6 border-b-4 rounded-sm border-black mx-auto mt-20 mb-10"/>
					<input  type="password" placeholder="***********" class="modal-input w-4/6 border-b-4 rounded-sm border-black mx-auto mt-4"/>
				</div>

				<div class="flex flex-col justify-center h-full">
					<button class="modal-button bg-white rounded-md px-12 py-3 m-auto mt-20">Login</button>
					<h1 class="block m-auto -mt-10">New to BxS? Create Account</h1>
				</div>
			</div>
		</div>

		)

}

export default LoginModal