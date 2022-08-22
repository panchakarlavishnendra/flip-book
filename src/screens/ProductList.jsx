import React, {useState} from "react";
import ProductThumbnail from "../shared-components/ProductThumbnail";
import ProductDetails from "../shared-components/ProductDetails";
import Data from "../data/data.json";
import './ProductList.css';


const ProductList = () =>{
    const [productData, setProductData] = useState(Data.arrayOfProducts);
    const [selectedProduct, setSelectedProduct] = useState(Data.arrayOfProducts[0]); 
    const selectedData = (data)=>{
        setSelectedProduct(data);
    }
    return (
        <div className="h-100 bg-light rounded">
            <div>
            <input className="search-input" type="text" placeholder="Search.." name="search" />
            <button className="search-button" type="submit"><i className="fa fa-search"></i></button>
            </div>
            <div className="p-4 d-flex">
            <ProductThumbnail productData={productData} selectedData={selectedData}/>
            <ProductDetails selectedProduct={selectedProduct} />
            </div>
        </div>
        
    )
}

export default ProductList;