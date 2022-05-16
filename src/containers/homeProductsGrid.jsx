import React, { useState, useEffect } from "react";
import Axios from "axios";
import ProductItem from "../components/ProductItem";
import '../styles/productGrid.css'


const ProductGrid = () => {
    const [list, setList] = useState([]);
    useEffect(()=>{
        Axios({
            url:"https://fakestoreapi.com/products/",
        })
        .then((response)=>{
            console.log(response.data)
            setList(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[setList]);
    return(
        <React.Fragment>
            <div className="productGrid-wrap">
                {list.map((item)=>(
                    <ProductItem 
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    ></ProductItem>
                ))}
            </div>
        </React.Fragment>
    )
}

export default ProductGrid