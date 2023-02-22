import ItemCard from "../Buyerpage/ItemCard";

function DealsArea(props){
    return (
        <div class="flex flex-col h-full w-full">
            <div class="flex flex-row  mt-10 m-auto h-5/6 w-11/12">
                <div class="flex flex-col m-5 stage-area h-5/6 w-6/12">
                    <div class="flex flex-1  h-full w-full">
                        <h1 class="product-name m-auto text-5xl">Total Items Sold</h1>
                    </div>
                    <div class="flex flex-2  h-full w-full">
                    
                    </div>
                </div>
                <div class="flex flex-col m-5 stage-area h-5/6 w-6/12">
                    <div class="flex flex-1 h-full w-full">
                        <h1 class="product-name m-auto text-5xl">Total Sales</h1>
                    </div>
                    <div class="flex flex-2  h-full w-full">
                    
                    </div>
                </div>
            </div>
            <div class="flex ml-20 h-40 w-80">
                <h1 class="product-name text-6xl">Previous Sales</h1>
            </div>
            <div class="flex overflow-x-scroll h-full w-full">
                <ItemCard comploc={"seller"}/>
                <ItemCard comploc={"seller"}/>
                <ItemCard comploc={"seller"}/>
                <ItemCard comploc={"seller"}/>
                <ItemCard comploc={"seller"}/>
                <ItemCard comploc={"seller"}/>
            </div>

        </div>
    )

}

export default DealsArea