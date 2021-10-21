
const Summary = ({totalPrice}) =>{
    const finallPrice = totalPrice+15;
    return(
        <div className="basket-summary">
            <div className="shipping">
                <p>Shipping:</p>
                <p>€15</p>
            </div>
            <div className="order-total">
                <p>Order Total:</p>
                <p>€{finallPrice.toFixed(2)}</p>
            </div>
            <a href='/' className="btn-summary">Checkout</a>
        </div>
    )
}

export default Summary;