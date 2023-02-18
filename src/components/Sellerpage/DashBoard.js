const pfpicon = require("../../assets/pfp.png")
function DashBoard(props) {
    return ( 
        <div class="flex overflow-hidden border-4 border-purple-900 w-full h-full">
            <div class="flex border-4 border-black sellerpage-bg flex-col xl:w-2/6 md:w-3/6 h-full">
                
                <div class="flex-1 justify-center border-4 border-red-900 w-full h-full">
                    <img class="m-auto scale-75" src={pfpicon}></img>
                </div>

                <div class="flex-2 border-4 border-green-900 w-full h-full">

                </div>
            </div>
            <div class="flex w-full h-full border-4 border-orange-600">

            </div>
        </div>
     );
}

export default DashBoard;