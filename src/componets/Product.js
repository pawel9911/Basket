
const Product = () =>{
    return (
        <li className="product">
            <div className="item">
                <img></img>
                <div className="description">
                    <span className="product-name">product name</span>
                    {/* opcje produktu */}
                </div>
                <span>X</span>
            </div>

            <div className="qty-price">
                <div className="qty">
                    <p>Qty:</p>
                    <button>-</button>
                    <input readOnly/>
                    <button>+</button>
                </div>
                <div className="price">
                    <span>99.99</span>
                    <span>59.99</span>
                </div>
            </div>
        </li>
    )
}

export default Product;
