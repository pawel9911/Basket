import { useState } from "react";
import Basket from "./componets/Basket";

const Main = () =>{
    const [status, setStatus] = useState(false);
    const isClose = () =>{
        setStatus(status? false: true )
    }
    if(status){
        return (
            <>
            <button className="btn" onClick={isClose}>
                <span className="btn-main">CLOSE</span>
            </button>
            <Basket setStatus={isClose}/>
            </>
        )
    }
    else{
        return (
            <button className="btn" onClick={isClose}>
                <span className="btn-main">OPEN</span>
            </button>
        )
    }
}

export default Main;
