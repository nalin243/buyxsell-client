function FeedbackArea(props) {
    return ( 

        <div class="flex justify-center h-full w-full">
            <div class="flex m-auto stage-area h-5/6 w-11/12">
                <div class="flex flex-col  h-full w-full">
                    <div class="flex flex-1  h-full w-full">
                        <input type="text" placeholder="Feedback Title" class="stage-input w-5/6 p-3 mt-44 rounded-3xl m-auto"/>
                    </div>
                    <div class="flex flex-2  h-full w-full">
                        <textarea rows="10" type="text" placeholder="Feedback Description..." class="stage-input p-6 w-5/6 mt-10 rounded-3xl m-auto"/>
                    </div>
                    <div class="flex flex-1  h-full w-full">
                        <button class="modal-button bg-white text-black rounded-3xl -mt-48 px-14 py-3 m-auto">SEND</button>
                    </div>
                </div>
                <div class="flex  h-full w-full">

                </div>
            </div>

        </div>

     );
}

export default FeedbackArea;