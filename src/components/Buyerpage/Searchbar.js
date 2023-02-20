function SearchBar(props) {
    return(
        <div id="search-bar" class="w-1/2 m-auto">   
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative -mt-60">
                <input onClick={()=>{
                    document.getElementById("search-area").classList.remove("hidden")
                    document.getElementById("search-bar").classList.add("hidden")
                }}type="search" class="flex bg-white 200 w-full p-4 pl-4 rounded-lg placeholder-gray-400" placeholder="Search Products..." required/>
        </div>
    </div>
    )
}

export default SearchBar
