import listProduct from "../listProduct";

const Summary = ({totalPrice}) =>{
    const finallPrice = totalPrice+listProduct.shipping;
    return(
        <div className="basket-summary">
            <div className="shipping">
                <p>Shipping:</p>
                <p>{listProduct.currency+listProduct.shipping}</p>
            </div>
            <div className="order-total">
                <p>Order Total:</p>
                <p>{listProduct.currency+finallPrice.toFixed(2)}</p>
            </div>
            <a href='/' className="btn-summary">Checkout</a>
        </div>
    )
}

export default Summary;