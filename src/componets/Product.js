import { useState } from "react";

const Product = ({data, finallPrice, finallBasket, basket}) =>{
    const [properties, setProperties] = useState([[data.size, "size"],[data.color, "color"], [data.pattern, "pattern"]])
    const [qty, setQty] = useState(1);
    const [sumPriceProduct, setSumPriceProduct] = useState(data.currentPrice)
    
    const up = () =>{
        if(qty <10){
            setQty(p => p+1);
            setSumPriceProduct(p => p+data.currentPrice)
            finallPrice(p=> p+data.currentPrice)
        }
    }
    const down = () =>{
        if(qty >1){
            setQty(p => p-1)
            setSumPriceProduct(p => p-data.currentPrice)
            finallPrice(p=> p-data.currentPrice)
        }
    }
    const removeProduct = () =>{
        finallPrice(p=> p-sumPriceProduct)
        finallBasket(()=>{
            const newBasket = basket.filter((el)=>{
                return el.id !== data.id
            })
            return newBasket
        })
    }

    return (
        <li className="product">
            <div className="product-description">
                <img></img>
                <div className="description">
                    <span className="product-name">{data.name}</span>
                    {properties.map((property, i)=> <p className="product-property" key={i}><span>{property[0]? `${property[1]}:`: null} </span>{property[0]}</p>)}
                </div>
                <button className="remove-button" onClick={removeProduct}>X</button>
            </div>

            <div className="qty-price">
                <div className="qty">
                    <p>Qty:</p>
                    <button onClick={down}>-</button>
                    <input readOnly value={qty}/>
                    <button onClick={up}>+</button>
                </div>
                <div className="price">
                    {data.oldPrice? <span className="old-price"><s>€{data.oldPrice}</s></span>: null}
                    <span>€{sumPriceProduct.toFixed(2)}</span>
                </div>
            </div>
        </li>
    )
}

export default Product;
