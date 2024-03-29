import '../styles/ShoppingCartItem.css'

const ShoppingcartItem = (props) => {

const {handleRemoveFromCart} = props

console.log(handleRemoveFromCart)

    return (
        <div className="d-flex border-bottom border-white py-3 w-100">
            <img className="productImage" src={props.image} alt=""></img>
            <div className="productInfoContainer d-flex flex-column align-items-start px-2">
                <h1 className="productName">{props.name}</h1>
                <h2 className="productPrice">{props.price}€</h2>
                <p className="productInfoText">Kappale: {props.quantity}</p>
                <p className="productInfoText">Koko: {props.koko}</p>
                <p className="productInfoText">Värit: {props.vari}</p>
            </div>
            <div>
                <button className="deleteProductBtn" onClick={() => handleRemoveFromCart(props.product)}>
                    <svg className="deleteProduct bi bi-trash" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default ShoppingcartItem;