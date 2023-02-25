const backicon = require("../../assets/arrow-left.png")
const searchicon = require('../../assets/market.png')

import ItemCard from "../ItemCard"
import Searchbar from "./Searchbar"

import {useEffect,useState} from "react"
import axios from "axios"

function SearchArea(props){

	const [shop,updateShop] = useState(null)

	useEffect(()=>{
		axios.get(process.env.REACT_APP_SERVER_URL+"shop",{
			headers:{
				Authorization: localStorage.getItem("userTokenBuyer")
			}
		})
			.then((response)=>{
				if(response.data.success){
					updateShop((response.data.shop).map((item)=>{
						return <ItemCard comploc={"buyer"} name={item.name} price={item.price} description={item.description}/>
					}))
				}
			})

			document.getElementById("searchiconbuyer").addEventListener("keypress",(event)=>{
				if(event.key==="Enter"){
					axios.get(process.env.REACT_APP_SERVER_URL+"shop",{
						headers:{
							Authorization: localStorage.getItem("userTokenBuyer")
						}
					})
						.then((response)=>{
							if(response.data.success){
								updateShop((response.data.shop).map((item)=>{
									return <ItemCard comploc={"buyer"} name={item.name} price={item.price} description={item.description}/>
								}))
							}
						})
				}
			})

	},[])

	return (

		<div id="search-area" class="flex hidden flex-col fixed backdrop-blur inset-0  h-screen w-screen">
			<div class="flex w-full  backdrop-blur">
					<img onClick={()=>{
						document.getElementById("search-area").classList.toggle("hidden")
						document.getElementById("search-bar").classList.toggle("hidden")
					}} class="hover:cursor-pointer ml-7 mt-7 h-10 w-10" src={backicon}></img>
					<input id="searchiconbuyer" type="search" placeholder="Search for products..." class="placeholder-gray-800 border-b-4 rounded-sm border-black bg-transparent w-full mt-5 ml-4"/>
					<img  src={searchicon} class="h-10 w-10 hover:cursor-pointer -ml-10 mt-5 mr-12"/>
			</div>
			<div class="relative flex overflow-y-scroll flex-wrap h-screen w-screen">
				{shop}
			</div>

		</div>


		)
}

export default SearchArea