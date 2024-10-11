import React, {useContext} from "react";
// import { IoIosAdd } from "react-icons/io";
import add_icon from '../../assets/add_icon.png'
import add_icon_green from '../../assets/add_icon_green.png'
import remove_icon_red from '../../assets/remove_icon_red.png'
import { StoreContext } from "../../context/StoreContext";

import "./FoodItem.css";
import {food_list} from '../../assets/assets'
const FoodItem = ({id,name,price,description,image}) => {
    const {cartItems, addToCart,removeFromCart} = useContext(StoreContext)
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItems[id]
            ?<img className='add' onClick={()=>addToCart(id)} src={add_icon} alt=""/>
            :<div className="food-item-counter">
            <img onClick={()=>removeFromCart(id)} src={remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={add_icon_green} alt=""/>
            </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
         <p>{name}</p>
        
         </div>
         <p className="food-item-des">{description}</p>
         <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem;

// after 27           <img src={food_list.rating_starts} alt=""/>
