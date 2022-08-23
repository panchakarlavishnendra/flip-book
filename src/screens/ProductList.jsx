import React, { useState } from "react";
import ProductThumbnail from "../shared-components/ProductThumbnail";
import ProductDetails from "../shared-components/ProductDetails";
import Data from "../data/data.json";
import './ProductList.css';
import { Navbar, Nav, form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ProductList = () => {
    const [productData, setProductData] = useState(Data.arrayOfProducts);
    const [selectedProduct, setSelectedProduct] = useState(); 
    const [searchData, setSearchData] = useState([]);

    const selectedData = (data)=>{
        setSelectedProduct(data);
    }

    const onHandelInputChange = (e) =>{
        let tempData = [];
        Data.arrayOfProducts.map((element)=>{
            if (element.name.toLowerCase().includes(e.target.value.toLowerCase())){
                tempData.push(element);
            }
        })

        
        if (tempData[0]){
            setProductData(tempData);
            setSelectedProduct(tempData[0]);
            setSearchData(tempData);
        }else{
            setProductData([]);
            // setSelectedProduct(Data.arrayOfProducts[0]);
            setSearchData([]);
        }
    }

    return (
        <div className="h-100 bg-light rounded">
            <div className="row p-3">
                <div className="col-md-5 mx-auto">
                    <div className="input-group">
                        <input
                            className="form-control border rounded-pill"
                            type="search"
                            placeholder="search"
                            id="example-search-input"
                            onChange={(e)=>{onHandelInputChange(e)}}
                        />
                    </div>
                </div>
            </div>

            <div className="p-4 d-flex">
                <ProductThumbnail productData={productData} selectedData={selectedData}/>
                <ProductDetails selectedProduct={selectedProduct} />
            </div>
            
        </div>

    )
}

export default ProductList;