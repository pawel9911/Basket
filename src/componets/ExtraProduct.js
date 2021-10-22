
const ExtraProduct = ({data}) =>{
    return(
        <div className="extra-product">
            <div>
                <img src={data.image}/>
            </div>

            <div className="up-sell-description">
                <p>{data.title}</p>
                <div>
                    <p>€ {data.price}</p>
                    <button>Add</button>
                </div>
            </div>
        </div>
    )
}

export default ExtraProduct;
