import { useEffect, useState } from "react";
import Product from "./Product";
import Summary from "./Summary";
import UpSellsProducts from "./UpSellsProducts";
import listProduct from "../listProduct";
import '../scss/App.scss';

const Basket = ({setStatus}) =>{
    const [offer, setOffer] = useState(listProduct.items);
    const [totalPrice, setPrice] = useState(0);
    useEffect(()=>{
        offer.forEach((element)=> setPrice(p => p+element.qty*element.price.current_price))
    },[])
    return(
        <div className="basket">
            <div className="basket-title">
                <p>Cart ({offer.length})</p>
                <button onClick={setStatus}>X</button>
            </div>
            <div className="basket-content">
                <ul>
                    {offer.map((element)=> <Product key={element.id} data={element} finallPrice={setPrice} filterBasket={setOffer} basket={offer}/>)}
                    <UpSellsProducts/>
                </ul>
            </div>
            <Summary totalPrice={totalPrice}/>
        </div>
    )
}

export default Basket;
