import React from "react";
import "../styles/productItem.css"


const ProductItem = (props) =>{
    return(
        <React.Fragment>
            <div className="productGrid-item">
                    <img className="productGrid-image" src={props.image} />
                    <h2 className="productGrid-title">{props.title}</h2>
                    {/* <p className="productGrid-description">{props.description}</p> */}
                    <div className="productGrid-price">$ <b>{props.price}</b></div>
            </div>
        </React.Fragment>
    )
}


export default ProductItem