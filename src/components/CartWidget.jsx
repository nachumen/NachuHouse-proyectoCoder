import { BsCart4 } from "react-icons/bs";

const CarWidget = (props) =>{
    return (
        <div className="cartWidgetContainer">
            <BsCart4 fontSize={'2rem'} color="white"/>
            <p className="cartCounter">{props.counter}</p>
        </div>
    )
}

export default CarWidget