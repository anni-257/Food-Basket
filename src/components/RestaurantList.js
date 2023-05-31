import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantList=()=>{
    const {id}=useParams();
    const [restaurant, setRestaurant]=useState({});

    useEffect(()=>{
        getRestaurantList();
    },[])

    async function getRestaurantList(){
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5912716&lng=73.73890899999999&restaurantId=441447");
        const json=await data.json();
        console.log(json.data);

    }
    return(
        <div>
            <h1>Restaurant-Id:{id}</h1>
            <h1>RadhaKrishna Hotel</h1>
        </div>
    );
}

export default RestaurantList;