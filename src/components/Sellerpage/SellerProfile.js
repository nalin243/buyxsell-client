const pfpicon = require("../../assets/pfp.png")
const dashicon = require("../../assets/dash.png")
const dealicon = require("../../assets/deal.png")
const settingicon = require("../../assets/setting.png")
const feedbackicon = require("../../assets/feedback.png")

import {useState} from "react"

import DashboardArea from "./DashboardArea"
import DealsArea from "./DealsArea"
import SettingsArea from "./SettingsArea"
import FeedbackArea from "./FeedbackArea"



function SellerProfile(props) {

    const [currentItem,updateCurrentItem]  = useState("Dashboard")

    const ProfileNavItems = {}
    ProfileNavItems["Dashboard"] = <DashboardArea user={props.user}/>
    ProfileNavItems["Deals"] = <DealsArea user={props.user}/>
    ProfileNavItems["Settings"] = <SettingsArea user={props.user}/>
    ProfileNavItems["Feedback"] = <FeedbackArea user={props.user}/>


    return ( 
        <div class="flex overflow-hidden w-full h-full">
            <div class="flex sellerpage-bg flex-col xl:w-2/12 md:w-2/6 h-full">
                
                <div class="flex-1 mt-10 mb-10 w-full h-full">
                    <div class="flex flex-col h-full w-full">
                        <div class="flex m-2 mb-6">
                            <img class="m-auto -mt-12 scale-50" src={pfpicon}></img>
                        </div>
                        <div class="flex -mt-20 p-3 justify-center">
                            <h1 class="dashboard-text">{props.user}</h1>
                        </div>
                    </div>            
                </div>

                <div class="flex-2 w-full h-full">
                    <div class="flex flex-col w-full h-full">
                        
                        <div onClick={()=>{
                            updateCurrentItem("Dashboard")
                        }}class="flex justify-center h-1/6 w-full h-full">
                            <div class= "flex justify-center hover:cursor-pointer h-full w-full">
                                <img class="m-auto h-8 w-8" src={dashicon}></img>
                            </div>
                            <div class="flex justify-center h-full w-full">
                                <h2 class="nav-items m-auto -ml-10 text-white text-xl">Dashboard</h2>
                            </div>
                        </div>

                        <div onClick={()=>{
                            updateCurrentItem("Deals")
                        }} class="flex justify-center h-1/6 w-full h-full">
                            <div class="flex justify-center hover:cursor-pointer h-full w-full">
                                <img class="m-auto h-10 w-10" src={dealicon}></img>
                            </div>
                            <div class="flex justify-center h-full w-full">
                                <h2 class="nav-items m-auto -ml-9 text-white text-xl">Deals</h2>
                            </div>
                        </div>

                        <div onClick={()=>{
                            updateCurrentItem("Settings")
                        }} class="flex h-1/6 w-full h-full">
                            <div class="flex justify-center hover:cursor-pointer h-full w-full">
                                <img class="m-auto h-10 w-10" src={settingicon}></img>
                            </div>
                            <div class="flex justify-center h-full w-full">
                                <h2 class="nav-items m-auto -ml-9 text-white text-xl">Settings</h2>
                            </div>
                        </div>

                        <div onClick={()=>{
                            updateCurrentItem("Feedback")
                        }} class="flex h-1/6 w-full h-full">
                            <div class="flex justify-center hover:cursor-pointer h-full w-full">
                                <img class="m-auto h-10 w-10" src={feedbackicon}></img>
                            </div>
                            <div class="flex justify-center h-full w-full">
                                <h2 class="nav-items m-auto -ml-9 text-white text-xl">Feedback</h2>
                            </div>
                        </div>

                        <div class="flex max-md:hidden h-1/6 w-full h-full">
                            <div class="flex justify-center h-full w-full">
                                <div class="m-auto h-10 w-10"></div>
                            </div>
                            <div class="flex justify-center h-full w-full">
                                <h2 class="nav-items m-auto -ml-9 text-white text-2xl"></h2>
                            </div>
                        </div>

                         <div class="flex max-md:hidden h-1/6 w-full h-full">
                            <div class="flex justify-center h-full w-full">
                                <div class="m-auto h-10 w-10"></div>
                            </div>
                            <div class="flex justify-center h-full w-full">
                                <h2 class="nav-items m-auto -ml-9 text-white text-2xl"></h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="flex overflow-auto w-full h-full">
                {ProfileNavItems[currentItem]}
            </div>
        </div>
     );
}

export default SellerProfile;
