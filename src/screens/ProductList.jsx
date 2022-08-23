import React, { useState } from "react";
import ProductThumbnail from "../shared-components/ProductThumbnail";
import ProductDetails from "../shared-components/ProductDetails";
import Data from "../data/data.json";
import './ProductList.css';
import { Navbar, Nav, form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ProductList = () => {
    const [productData, setProductData] = useState(Data.arrayOfProducts);
    const [selectedProduct, setSelectedProduct] = useState(Data.arrayOfProducts[0]); 
    const [searchData, setSearchData] = useState([]);

    const selectedData = (data)=>{
        setSelectedProduct(data);
    }

    const onHandelInputChange = (e) =>{
        let tempData = [];
        console.log(Data,e.target.value,"Data");
        Data.arrayOfProducts.map((element)=>{
            if (element.name.includes(e.target.value)){
                console.log(element,"element");
                tempData.push(element);
            }
        })

        
        if (tempData[0]){
            setProductData(tempData);
            setSelectedProduct(tempData[0]);
            setSearchData(tempData);
        }else{
            setProductData(Data.arrayOfProducts);
            setSelectedProduct(Data.arrayOfProducts[0]);
            setSearchData([]);
        }
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