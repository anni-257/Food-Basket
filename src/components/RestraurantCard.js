import { IMG_CDN_URL } from "../Constants";

/**
 * !Hardcoded Data
 * const order={
    name:"McDonald's",
    url:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/7bb739d7f6ae8b4ce8ed590765dffd2f",
    cuisine:["Burgers","Beverages"],
    rating:4.2
}
 */

const RestaurantCard=({cloudinaryImageId,name,cuisines,avgRating,areaName,costForTwo})=>{
    return(
        <div className="card">
            <img style={{borderRadius:"5px"}} src={IMG_CDN_URL+cloudinaryImageId} />
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{areaName}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>

        </div>
    );
}

export default RestaurantCard;