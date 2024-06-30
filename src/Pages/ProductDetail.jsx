import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    
    const {id} = useParams();

    return(
        <p> el id de este producto es el {id}</p>
    )
}

export default ProductDetail;