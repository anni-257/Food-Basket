const ShimmerUl=()=>{
    return (
        <>
        <div className="search-container">
            <input type="text" className="search-input" style={{backgroundColor:"lightgray",border:"None"}}/>
            {/* <button className="search-btn" ></button> */}
        </div>
        <div className="restaurant-list">
           {Array(10)
           .fill("")
           .map((e)=> <div className="card" style={{backgroundColor:"lightgray", height:"390px", marginTop:"30px"}}></div>)}
        </div>
        </>
    );
}

export default ShimmerUl;