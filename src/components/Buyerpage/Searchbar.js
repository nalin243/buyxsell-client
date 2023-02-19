function SearchBar(props) {
    return(
        <div class="w-1/2 m-auto">   
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative -mt-60">
                <input type="search" id="default-search" class="flex bg-white 200 w-full p-4 pl-4 rounded-lg placeholder-gray-400" placeholder="Search Products..." required/>
                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 bg-blue-400 hover:bg-blue-800">Search</button>
        </div>
    </div>
    )
}

export default SearchBar