function SettingsArea(props) {
    return ( 

        <div class="flex h-full w-full">
            <div class="flex flex-row m-auto stage-area h-5/6 w-11/12">
                <div class="flex flex-col h-full w-full">
                    <div class="flex justify-end h-full w-full">
                    </div>
                    <div class="flex justify-end h-full w-full">
                        <div class="flex justify-center bg-slate-300 rounded-full -mt-16 h-56 w-56 m-auto">
                            {/*<img class="m-auto h-20 w-20 hover:cursor-pointer" src={uploadImg}/>*/}
                        </div>
                    </div>
                    <div class="flex h-full w-full">
                        <button class="modal-button bg-black text-white rounded-md px-14 py-3 m-auto mt-5">UPLOAD</button>
                    </div>
                </div>
                <div class="flex flex-col h-full w-full border-4 border-red-500">
                    <div class="flex justify-center mt-5 h-full w-full">
                        <h1 class="product-name text-4xl">Change Profile</h1>
                    </div>
                    <div class="flex -mt-5 h-full w-full">
                        <label class="product-name m-auto -mr-2 text-2xl">First Name</label>
                        <input id="item-name" type="text" placeholder="John/Jane" class="modal-input w-3/6 border-b-4 rounded-sm border-black m-auto"/>
                    </div>
                    <div class="flex h-full w-full">
                        <label class="product-name m-auto -mr-2 text-2xl">Last Name</label>
                        <input id="item-name" type="text" placeholder="Doe" class="modal-input w-3/6 border-b-4 rounded-sm border-black m-auto"/>
                    </div>
                    <div class="flex h-full w-full">
                        <label class="product-name m-auto -mr-2 text-2xl">Username</label>
                        <input id="item-name" type="text" placeholder="JohnJaneDoe1234" class="modal-input w-3/6 border-b-4 rounded-sm border-black m-auto"/>
                    </div>
                    <div class="flex h-full w-full">
                        <label class="product-name m-auto -mr-2 text-2xl">Email</label>
                        <input id="item-name" type="text" placeholder="johnjanedoe1234@gmail.com" class="modal-input w-3/6 border-b-4 rounded-sm border-black m-auto"/>
                    </div>
                    <div class="flex h-full w-full">
                        <label class="product-name m-auto -mr-2 text-2xl">Password</label>
                        <input id="item-name" type="text" placeholder="**********" class="modal-input w-3/6 border-b-4 rounded-sm border-black m-auto"/>
                    </div>
                    <div class="flex h-full w-full">
                        <label class="product-name m-auto -mr-2 text-2xl">Confirm</label>
                        <input id="item-name" type="text" placeholder="**********" class="modal-input w-3/6 border-b-4 rounded-sm border-black m-auto"/>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default SettingsArea;