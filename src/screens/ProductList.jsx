import React, { useState } from "react";
import ProductThumbnail from "../shared-components/ProductThumbnail";
import ProductDetails from "../shared-components/ProductDetails";
import Data from "../data/data.json";
import './ProductList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

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

        console.log(tempData[0])
        
        if (tempData[0]){
            setProductData(tempData);
            setSelectedProduct([]);
        }else{
            setProductData([]);
            setSelectedProduct([]);
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
            
            {selectedProduct && selectedProduct.id?<Button className="back-btn" onClick={()=>{ setSelectedProduct([])}} variant="outline-secondary">Back</Button>:""}
            {
                productData && productData.length ? <div className="product-over-view">
                    {selectedProduct && selectedProduct.id?
                        <ProductDetails selectedProduct={selectedProduct} />
                        :
                        <ProductThumbnail productData={productData} selectedData={selectedData}/>
                        // ""
                    }
                    {/* <ProductThumbnail productData={productData} selectedData={selectedData}/> */}
                    {/* <ProductDetails selectedProduct={selectedProduct} /> */}
                </div> :"No result found"
            }

            
            
        </div>

    )
}

export default ProductList;