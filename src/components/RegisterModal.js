const cancelicon = require('../assets/cancel.png')
const logoicon = require('../assets/logo.png')

function RegisterModal(props) {
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
                                    <input type="text" placeholder="Enter email ID" class="modal-input w-inherit md:mx-9 xl:mx-12 border-b-4 rounded-sm border-black mt-20 mb-2"/>
                                    <div class="flex flex-row">    
                                        <input type="text" placeholder="First Name" class="modal-input w-2/6 border-b-4 rounded-sm border-black mx-auto mt-20 mb-10"/>
                                        <input type="text" placeholder="Last Name" class="modal-input w-2/6 border-b-4 rounded-sm border-black mx-auto mt-20 mb-10"/>                                                                                       
                                    </div>
                                    <div class="flex flex-row mt-8">
                                        <input type="password" placeholder="Enter Password" class="modal-input w-2/6 border-b-4 rounded-sm border-black mx-auto mt-4"/>
                                        <input type="password" placeholder="Confirm Password" class="modal-input w-2/6 border-b-4 rounded-sm border-black mx-auto mt-4"/>        
                                    </div> 
                                </div>
                            </div>
                            <div class="flex h-full w-full">
                                <button class="modal-button rounded-3xl px-12 py-3 m-auto mt-18">SIGN-UP</button>
                            </div>
                        </div>
                        
                    </div>
                
                

            </div>
        </div>        
     );
}

export default RegisterModal;