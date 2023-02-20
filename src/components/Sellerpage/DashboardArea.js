const uploadImg = require("../../assets/image.png")

function DashboardArea(props){
    return (
        <div class="flex justify-center h-full w-full">
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
                        <button class="modal-button bg-white text-black rounded-md px-14 py-3 m-auto mt-5">UPLOAD IMAGE</button>
                    </div>
                </div>
                <div class="flex flex-col mr-20 h-full w-full">
                    <div class="flex h-full w-full">
                        <h1 class="m-auto product-name text-4xl">Product Details</h1>
                    </div>
                    <div class="flex h-full w-full">
                        <input type="text" placeholder="Item Name..." class="stage-input w-5/6 p-3 rounded-md m-auto"/>
                    </div>
                    <div class="flex h-full w-full mt-2">
                        <textarea rows="10" type="text" placeholder="Item Description..." class="stage-input w-5/6 h-6/6 p-6 rounded-md m-auto"/>
                    </div>
                    <div class="flex mt-2 h-full w-full">
                        <input type="number" placeholder="Price..." class="stage-input w-2/6 p-3 ml-16 rounded-md m-auto"/>
                    </div>
                    <div class="flex flex-row h-full w-full">
                        <div class="flex h-full w-full">
                            <button class="modal-button bg-white text-black rounded-md px-14 py-3 m-auto">SAVE</button>
                        </div>
                        <div class="flex h-full w-full">
                            <button class="modal-button bg-white text-black rounded-md px-14 py-3 m-auto">SELL</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardArea