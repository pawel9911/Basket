
const ExtraProduct = ({data}) =>{
    return(
        <div className="extra-product">
            <div>
                <img src={data.image}/>
            </div>

            <div className="kupa">
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
