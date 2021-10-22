import { useState } from "react";

const Product = ({data, finallPrice, filterBasket, basket}) =>{
    const [qty, setQty] = useState(data.qty);
    const price = data.price.current_price
    const [overallProductPrice, setOverallProductPrice] = useState(price*data.qty)
    
    const increaseQty = () =>{
        if(qty <10){
            setQty(p => p+1);
            setOverallProductPrice(p => p+price)
            finallPrice(p=> p+price)
        }
    }
    
    const decreaseQty = () =>{
        if(qty >1){
            setQty(p => p-1)
            setOverallProductPrice(p => p-price)
            finallPrice(p=> p-price)
        }
    }

    const handleChangeQty = (e) =>{
        const value = Number(e.target.value)
        if((value<=10)&&(value>=1)||(value=='')){
            setQty(value)
            setOverallProductPrice(value*price)
            finallPrice(p=>p+value*price-qty*price)
        }
        else{
            alert("Please select value from 1 to 10")
        }
    }

    const removeProduct = () =>{
        finallPrice(p=> p-overallProductPrice)
        filterBasket(()=>{
            const newBasket = basket.filter((el)=>{
                return el.id !== data.id
            })
            return newBasket
        })
    }

    return (
        <li className="product">
            <div className="product-description">
                <img src={data.image} alt={data.product_name}/>
                <div className="description">
                    <span className="product-name">{data.product_name}</span>
                    {data.product_options.map((option)=> <p className="product-property" key={option.id}><span>{option.name}: </span>{option.value}</p>)}
                </div>
                <button className="remove-button" onClick={removeProduct}>X</button>
            </div>

            <div className="qty-price">
                <div className="qty">
                    <p>Qty:</p>
                    <button onClick={decreaseQty}>-</button>
                    <input type="string" name="qty" onChange={handleChangeQty} value={qty}/>
                    <button onClick={increaseQty}>+</button>
                </div>
                <div className="price">
                    {data.price.old_price? <span className="old-price"><s>€{data.price.old_price}</s></span>: null}
                    <span>€{overallProductPrice.toFixed(2)}</span>
                </div>
            </div>
        </li>
    )
}

export default Product;
