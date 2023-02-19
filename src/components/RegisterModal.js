const cancelicon = require('../assets/cancel.png')
const logoicon = require('../assets/logo.png')

import {useState} from "react"
import axios from "axios"

function RegisterModal(props) {

    const [registerStatus,updateRegisterStatus] = useState("")

    function handleRegister(){

        console.log(props.userType)

        const pass = document.getElementById("register-password").value
        const confirmPass = document.getElementById("register-confirm-password").value
        const username = document.getElementById("register-username").value
        const email = document.getElementById("register-email").value
        const firstName = document.getElementById("register-first-name").value
        const lastName = document.getElementById("register-last-name").value

        if(pass===confirmPass){
            let data
            if(props.userType==="Seller"){
                data = {
                    name: firstName+" "+lastName,
                    username: username,
                    password: pass,
                    email: email,
                    userType:props.userType
                }
            }
            else if(props.userType==="Buyer"){
                 data = {
                    name: firstName+" "+lastName,
                    username:username,
                    password: pass,
                    email: email,
                    userType:props.userType
                }
            }
            axios.post(process.env.REACT_APP_SERVER_URL+"register",data)
                .then((response)=>{
                    if(response.data.success){
                        document.getElementById("register-modal").classList.toggle("hidden")
                        document.getElementById("register-password").value = ""
                        document.getElementById("register-confirm-password").value = ""
                        document.getElementById("register-username").value = ""
                        document.getElementById("register-email").value = ""
                        document.getElementById("register-first-name").value = ""
                        document.getElementById("register-last-name").value = ""
                        updateRegisterStatus("")
                    } 
                    else {
                        console.log("register failure")
                        document.getElementById("register-password").value = ""
                        document.getElementById("register-confirm-password").value = ""
                        document.getElementById("register-email").value = ""
                        document.getElementById("register-username").value = ""
                        document.getElementById("register-first-name").value = ""
                        document.getElementById("register-last-name").value = ""
                        updateRegisterStatus("User already exists!")
                    }
                })
                .catch((err)=>{
                    document.getElementById("register-password").value = ""
                    document.getElementById("register-confirm-password").value = ""
                    document.getElementById("register-email").value = ""
                    document.getElementById("register-username").value = ""
                    document.getElementById("register-first-name").value = ""
                    document.getElementById("register-last-name").value = ""
                    updateRegisterStatus(err.response.data.message)
                })
        }
        else
            updateRegisterStatus("Make sure password is same")
    }

    return ( 
        <div id="register-modal" class="fixed flex hidden backdrop-blur-sm z-10 justify-center inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full">
            <div class="flex flex-row modal-card relative m-auto h-5/6 xl:w-2/4 sm:w-3/4">                

                    <div class="flex flex-1 rounded-3xl flex-col h-full w-full register-modal">
                         <div class="flex flex-col register-modal rounded-3xl">
                            <button onClick={()=>{
                                document.getElementById("register-modal").classList.toggle("hidden")
                            }}>
                            <img class="z-10 cancel-icon hover:cursor-pointer h-5 w-5 mt-4 ml-4" src={cancelicon}/>
                            </button>
                        </div>
                        <div class="flex justify-center">
                            <img class="h-50 w-50 mt-28" src={logoicon}/>
                        </div>
                        <div class="mt-4 px-40">
                            {/* <h2 class="mt-5 product-name px-8">BUYxSELL</h2> */}
                        </div>
                    </div>

                    <div class="flex flex-col flex-2 h-full w-full">
                        <div class="flex  justify-center product-name w-full text-5xl">
                            <h1 class="m-auto mt-4 p-4">SIGN UP</h1>
                        </div>
                        <div class="flex flex-col  h-full w-full">
                            <div class="flex  flex-col justify-center">
                                <div class="flex flex-col justify-center h-full -mt-5">
                                    <input id="register-username" type="text" placeholder="Enter Username" class="modal-input w-inherit md:mx-9 xl:mx-12 border-b-4 rounded-sm border-black mt-20 mb-1"/>
                                    <input id="register-email" type="text" placeholder="Enter email ID" class="modal-input w-inherit md:mx-9 xl:mx-12 border-b-4 rounded-sm border-black mt-12 mb-1"/>
                                    <div class="flex flex-row">    
                                        <input id="register-first-name" type="text" placeholder="First Name" class="modal-input w-2/6 border-b-4 rounded-sm border-black mx-auto mr-1 mt-12 mb-5"/>
                                        <input id="register-last-name"  type="text" placeholder="Last Name" class="modal-input w-2/6 border-b-4 rounded-sm border-black mx-auto mt-8 mb-5"/>                                                                                       
                                    </div>
                                    <div class="flex flex-row mt-4">
                                        <input id="register-password" type="password" placeholder="Enter Password" class="modal-input w-2/6 border-b-4 rounded-sm border-black mr-1 mx-auto mt-4"/>
                                        <input id="register-confirm-password" type="password" placeholder="Confirm Password" class="modal-input w-2/6 border-b-4 rounded-sm border-black mx-auto mt-4"/>        
                                    </div> 
                                </div>
                            </div>
                            <div class="flex flex-col h-full w-full justify-center mt-4">
                                <button onClick={handleRegister} class="modal-button rounded-3xl px-12 py-3 m-auto mt-18">SIGN-UP</button>
                                <h1 class="m-auto -mt-9 italic">{registerStatus}</h1>
                            </div>
                        </div>
                        
                    </div>
                
                

            </div>
        </div>        
     );
}

export default RegisterModal;