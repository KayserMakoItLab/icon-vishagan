import { useState } from "react";
import { data } from "../data/icons";

const Search = ({close, setIcons}) => {
    const [searchText, setSearchText] = useState('')

    if (searchText && searchText.length > 0){
        const sortedData = data.filter(({ tags }) => tags.includes(searchText))
        setIcons(sortedData)
    } else {
        setIcons(data)
    }

    return <div className="search-container">
            <input className="search-field" placeholder="Search" onChange={(e)=>{setSearchText(e.target.value)}} value={searchText}/>
            <button className="btn back-btn" onClick={() => close()}>x</button>
    </div>
}

export default Search;