const uploadImg = require("../../assets/upload.png")

function DashboardArea(props){
    return (
        <div class="flex justify-center h-full w-full">
            <div class="flex flex-row m-auto border-1 border-black stage-area h-5/6 w-11/12">
                <div class="flex flex-col h-full w-full">
                    <div class="flex justify-end h-full w-full">
                        <img class="m-auto mt-36 hover:cursor-pointer" src={uploadImg}/>
                    </div>
                    <div class="flex h-full w-full">
                        <button class="modal-button bg-white text-black rounded-3xl px-14 py-3 m-auto mt-5">UPLOAD IMAGE</button>
                    </div>
                </div>
                <div class="flex flex-col mr-20 h-full w-full">
                    <div class="flex h-full w-full">
                        <input type="text" placeholder="Item Name..." class="stage-input w-5/6 p-3 rounded-3xl m-auto"/>
                    </div>
                    <div class="flex h-full w-full mt-2">
                        <textarea rows="10" type="text" placeholder="Item Description..." class="stage-input w-5/6 h-6/6 p-6 rounded-3xl m-auto"/>
                    </div>
                    <div class="flex mt-2 h-full w-full">
                        <input type="number" placeholder="Price..." class="stage-input w-2/6 p-3 ml-16 rounded-3xl m-auto"/>
                    </div>
                    <div class="flex flex-row h-full w-full">
                        <div class="flex h-full w-full">
                            <button class="modal-button bg-white text-black rounded-3xl px-14 py-3 m-auto">SAVE</button>
                        </div>
                        <div class="flex h-full w-full">
                            <button class="modal-button bg-white text-black rounded-3xl px-14 py-3 m-auto">SELL</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardArea