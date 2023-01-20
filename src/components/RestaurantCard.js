import { IMG_CDN_URL } from "../config"

const RestaurantCard = ({ name, cloudinaryImageId, lastMileTravelString, cuisines }) => (
    <div className="card">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h2>{name}</h2>
        <h3>{cuisines.join(',')}</h3>
        <h4>{lastMileTravelString}</h4>

    </div>
)

export default RestaurantCard;