import Product from "./Product";
import '.././App.css';
import Summary from "./Summary";
import { useState } from "react";

const Basket = ({setStatus}) =>{
    const [totalPrice, setPrice] = useState(261);
    const [offer, setOffer] = useState([
        {id: 1, name:"T-shirt", size:"M", color:"red", pattern:"floral", oldPrice: 99.95, currentPrice:59.95},
        {id:2, name:"Dress", size:"L", currentPrice:80.55},
        {id:3, name:"Backpack", oldPrice:150.95, currentPrice:120.50}]);

    return(
        <div className="basket">
            <div className="basket-title">
                <p>Cart ({offer.length})</p>
                <button onClick={setStatus}>X</button>
            </div>
            <div className="basket-content">
                <ul>
                    {offer.map((element)=> <Product key={element.id} data={element} finallPrice={setPrice} finallBasket={setOffer} basket={offer}/>)}
                </ul>
            </div>
            <Summary totalPrice={totalPrice}/>
        </div>
    )
}

export default Basket;
