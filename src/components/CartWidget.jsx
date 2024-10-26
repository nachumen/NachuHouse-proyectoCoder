
const CarWidget = (props) =>{
    return (
        <div className="cartWidgetContainer">
            <img src="../cart.png" alt="carrito" className="cartIcon"/>
            <p className="cartCounter">{props.counter}</p>
        </div>
    )
}

export default CarWidget