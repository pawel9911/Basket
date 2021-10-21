import Product from "./Product";
import '.././App.css';

const Basket = () =>{
    return(
        <div className="basket">
            <div className="basket-title">
                <p>Cart ()</p>
                <a href='/'>X</a>
            </div>
            <div className="basket-content">
                <ul>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </ul>
                <div className="basket-summary">
                    <div className="shipping">
                        <p>Shipping:</p>
                        <p>15</p>
                    </div>
                    <div className="order-total">
                        <p>Order Total:</p>
                        <p>500</p>
                    </div>
                    <a href='/' className="btn">Checkout</a>
                </div>
            </div>
        </div>
    )
}

export default Basket;
