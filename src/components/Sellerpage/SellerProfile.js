const pfpicon = require("../../assets/pfp.png")
const dashicon = require("../../assets/dash.png")
const dealicon = require("../../assets/deal.png")
const settingicon = require("../../assets/setting.png")
const feedbackicon = require("../../assets/feedback.png")


function SellerProfile(props) {
    return ( 
        <div class="flex overflow-hidden w-full h-full">
            <div class="flex  sellerpage-bg flex-col xl:w-2/12 md:w-2/6 h-full">
                
                <div class="flex-1 w-full h-full">
                    <div class="flex flex-col h-full w-full">
                        <div class="flex m-2">
                            <img class="m-auto -mt-12 scale-50" src={pfpicon}></img>
                        </div>
                        <div class="flex -mt-16 justify-center">
                            <h1 class="dashboard-text">.....</h1>
                        </div>
                        <div class="flex -mt-15 p-3 justify-center">
                            <h1 class="dashboard-text">Subhayan Majumder</h1>
                        </div>
                    </div>            
                </div>

                <div class="flex-2 w-full h-full">
                    <div class="flex flex-col w-full h-full">
                        
                        <div class="flex justify-center h-1/6 w-full h-full">
                            <div class= "flex justify-center hover:cursor-pointer h-full w-full">
                                <img class="m-auto h-8 w-8" src={dashicon}></img>
                            </div>
                            <div class="flex justify-center h-full w-full">
                                <h2 class="nav-items m-auto -ml-10 text-white text-2xl">Dashboard</h2>
                            </div>
                        </div>

                        <div class="flex justify-center h-1/6 w-full h-full">
                            <div class="flex justify-center hover:cursor-pointer h-full w-full">
                                <img class="m-auto h-10 w-10" src={dealicon}></img>
                            </div>
                            <div class="flex justify-center h-full w-full">
                                <h2 class="nav-items m-auto -ml-9 text-white text-2xl">Deals</h2>
                            </div>
                        </div>

                        <div class="flex h-1/6 w-full h-full">
                            <div class="flex justify-center hover:cursor-pointer h-full w-full">
                                <img class="m-auto h-10 w-10" src={settingicon}></img>
                            </div>
                            <div class="flex justify-center h-full w-full">
                                <h2 class="nav-items m-auto -ml-9 text-white text-2xl">Settings</h2>
                            </div>
                        </div>

                        <div class="flex h-1/6 w-full h-full">
                            <div class="flex justify-center hover:cursor-pointer h-full w-full">
                                <img class="m-auto h-10 w-10" src={feedbackicon}></img>
                            </div>
                            <div class="flex justify-center h-full w-full">
                                <h2 class="nav-items m-auto -ml-9 text-white text-2xl">Feedback</h2>
                            </div>
                        </div>

                        <div class="flex max-md:hidden h-1/6 w-full h-full">
                            <div class="flex justify-center hover:cursor-pointer h-full w-full">
                                <div class="m-auto h-10 w-10"></div>
                            </div>
                            <div class="flex justify-center h-full w-full">
                                <h2 class="nav-items m-auto -ml-9 text-white text-2xl"></h2>
                            </div>
                        </div>

                         <div class="flex max-md:hidden h-1/6 w-full h-full">
                            <div class="flex justify-center hover:cursor-pointer h-full w-full">
                                <div class="m-auto h-10 w-10"></div>
                            </div>
                            <div class="flex justify-center h-full w-full">
                                <h2 class="nav-items m-auto -ml-9 text-white text-2xl"></h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
     );
}

export default SellerProfile;
