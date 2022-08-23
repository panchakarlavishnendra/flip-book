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
    const selectedData = (data) => {
        setSelectedProduct(data);
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
                        />
                    </div>
                </div>
            </div>
            <div className="p-4 d-flex">
                <ProductThumbnail productData={productData} selectedData={selectedData} />
                <ProductDetails selectedProduct={selectedProduct} />
            </div>
        </div>

    )
}

export default ProductList;