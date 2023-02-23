import ItemCard from "../ItemCard";

import axios from "axios"
import {useEffect,useState} from "react"

function DealsArea(props){

    const [deals,updateDeals] = useState(null)
    const [totalItemsSold,updateTotalItemsSold] = useState(0)
    const [totalSales,updateTotalSales] = useState(0)

    console.log(props.user)

    useEffect(()=>{
        axios.get(process.env.REACT_APP_SERVER_URL+"item?searchby=sellername&sellername="+props.user,{
            headers: {
                Authorization: localStorage.getItem("userTokenSeller")
            }
        })
        .then((response)=>{
            updateTotalItemsSold(response.data.length)
            updateTotalSales(response.data.reduce((sum,item)=>{
                return sum+item.price
            },0))
            updateDeals((response.data).map((item)=>{
                return <ItemCard comploc={"seller"} name={item.name} description={item.description} soldto={item.soldto} price={item.price} />
            })) 
        })
    })
    return (
        <div class="flex flex-col h-full w-full">
            <div class="flex flex-row  mt-10 m-auto h-5/6 w-11/12">
                <div class="flex flex-col m-5 stage-area h-5/6 w-6/12">
                    <div class="flex flex-1  h-full w-full">
                        <h1 class="product-name m-auto text-5xl">Total Items Sold</h1>
                    </div>
                    <div class="flex flex-2  h-full w-full">
                        <h1 class="product-name m-auto text-5xl">{totalItemsSold}</h1>
                    </div>
                </div>
                <div class="flex flex-col m-5 stage-area h-5/6 w-6/12">
                    <div class="flex flex-1 h-full w-full">
                        <h1 class="product-name m-auto text-5xl">Total Sales</h1>
                    </div>
                    <div class="flex flex-2  h-full w-full">
                        <h1 class="product-name m-auto text-5xl">{totalSales}</h1>
                    </div>
                </div>
            </div>
            <div class="flex ml-20 h-40 w-80">
                <h1 class="product-name text-6xl">Previous Sales</h1>
            </div>
            <div class="flex overflow-x-scroll h-inherit min-w-full">
                {deals}
            </div>

        </div>
    )

}

export default DealsArea