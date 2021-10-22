import { useEffect, useState } from "react"
import ExtraProduct from "./ExtraProduct";

const UpSellsProducts = () =>{
    const [upSellsProducts, setUpSellsProducts] = useState(false);
    let num1 = Math.floor(Math.random() *9);
    let num2 = Math.floor(Math.random() * (19 - 10)) + 10;
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => setUpSellsProducts(data))
    },[])

   if(upSellsProducts){
       return (
        <div className="up-sell-container">
            <h4>Recommended Products:</h4>
            <ExtraProduct data={upSellsProducts[num1]}/>
            <ExtraProduct data={upSellsProducts[num2]}/>
        </div>
    )
   }
   else{
       return null
   }
}

export default UpSellsProducts