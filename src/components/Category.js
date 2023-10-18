import { data } from "../data/icons";

const Category = ({ close, setIcons }) => {
    const handleCLick = (search) => {
        const sortedData  = data.filter(({ tags }) => tags.includes(search))
        setIcons(sortedData)
    }
    return <div className="category-container">
        <div className="btn-container">
            <button className="btn" onClick={() => handleCLick('christmas')}>Christmas</button>
            <button className="btn" onClick={() => handleCLick('tools')}>Tools</button>
        </div>
        <div className="btn-container">
            <button className="btn" onClick={() => handleCLick('food')}>Food</button>
            <button className="btn" onClick={() => handleCLick('travel')}>Travel</button>
            <button className="btn" onClick={() => handleCLick('festival')}>Festival</button>
        </div>
        <div className="btn-container">
            <button className="btn" onClick={() => handleCLick('graph')}>Graph</button>
            <button className="btn" onClick={() => handleCLick('marketing')}>marketing</button>
            <button className="btn back-btn" onClick={() => close()}>{'<'}</button>
            <button className="btn" onClick={() => handleCLick('vehicle')}>Vehicle</button>
            <button className="btn" onClick={() => handleCLick('others')}>Others</button>
        </div>
    </div>
}

export default Category;