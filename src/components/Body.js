import RestaurantCard from "./RestraurantCard";
import { restaurantList } from "../Constants";
import { useState, useEffect } from "react";
import ShimmerUl from "./ShimmerUI";
// !images --> import xyz from "../assets/images"

function filterData(searchText, allRestaurants){
    // if(!searchText){
    //     return allRestaurants;
    // }
    return allRestaurants.filter((restaurant)=>
        restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
}

const Body=()=>{
    // let searchText="Aniket";
    const [allRestaurants, setAllRestaurants]=useState([]);
    const [filteredRestaurants, setfilteredRestaurants]=useState([]); // state variable
    const [searchText,setSeachText]=useState("");
    console.log("render") //..On every re-rendering process it will called
    
    useEffect(()=>{
        // API Call
        getRestaurants();
    },[]);

    // Empty dependency array --> once after render
    // dependency array [searchText] --> once after initial render + everytime after re-render (searchText changes)

    async function getRestaurants(){
        const data= await fetch("https://www.swiggy.com/dapi/homepage/getCards?lat=18.5912716&lng=73.73890899999999")
        console.log(data);
        const json= await data.json();
        setfilteredRestaurants(json?.data?.success?.cards[0]?.favourite?.cards);
        setAllRestaurants(json?.data?.success?.cards[0]?.favourite?.cards);
        // console.log(json);
    }

    return (allRestaurants.length===0) ? <ShimmerUl/> : (
        <>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search" value={searchText} onChange={(e)=>{
                setSeachText(e.target.value);
            }}/>
            <button className="search-btn" onClick={()=>{
                // filter the data
                let filterRestaurants=filterData(searchText,allRestaurants);
                // update the restaurant list
                setfilteredRestaurants(filterRestaurants);
                
            }}>Search</button>
        </div>
        <div className="restaurant-list">
            {(!filteredRestaurants.length)? <h1>Results Not Found</h1>:""}
            {
                filteredRestaurants.map(restaurant=>{
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                })
            }
        </div>
        </>

    );
}

export default Body;