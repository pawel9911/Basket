
const ExtraProduct = ({data}) =>{
    console.log(data)
    return(
        <div className="extra-product">
            <div>
                <img src={data.image}/>
            </div>

            <div className="kupa">
                {/* <div> */}
                    <p>{data.title}</p>
                {/* </div> */}
                <div>
                    <p>€ {data.price}</p>
                    <button>Add</button>
                </div>
            </div>
        </div>
    )
}

export default ExtraProduct