import React from "react";
import ProductItem from "../components/ProductItem";
import '../styles/productGrid.css'


const ProductGrid = () => {
    return(
        <React.Fragment>
            <div className="productGrid-wrap">
                <ProductItem 
                image={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
                title={"Este es el titulo del producto"}
                description={"Esta es la descripcion del producto"}
                price={"0.000"}
                ></ProductItem>


<ProductItem 
                image={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
                title={"Este es el titulo del producto"}
                description={"Esta es la descripcion del producto"}
                price={"0.000"}
                ></ProductItem>

<ProductItem 
                image={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
                title={"Este es el titulo del producto"}
                description={"Esta es la descripcion del producto"}
                price={"0.000"}
                ></ProductItem>


    <ProductItem 
                image={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
                title={"Este es el titulo del producto"}
                description={"Esta es la descripcion del producto"}
                price={"0.000"}
                ></ProductItem>
            </div>
        </React.Fragment>




        
    )
}

export default ProductGrid