import React, { useState, useEffect } from "react";
import PdfThumbnail from "./pdfThumbnail";
import pdf from '../pdf/pdf.pdf';

const ProductThumbnail = (props) =>{
    const [thumbList,setThumbList] = useState([]);
    const [selectedThumbnail, setSelectedThumbnail] = useState(); 
    useEffect(()=>{
        setThumbList(props.productData);
    },[props]);

    const selectProduct = (i) =>{
        setSelectedThumbnail(i);
        props.selectedData(thumbList[i]);
    }
    

    return(
        <div className="product-thum-conatiner">
        {
            thumbList.map((product, index)=> { return(
                <div className={`d-flex align-items-center flex-column p-3 my-2 bg-white border ${selectedThumbnail===index? "active":""}`} key={product.id} onClick={()=>selectProduct(index)}>
                <img className="flex-shrink-0" src={product.imgUrl} alt="Pic 1"/>
                {/* <PdfThumbnail height={100} width={70} page={1} fileLocation={product.fileLocation?product.fileLocation:pdf}/> */}
                <div className="w-100 pt-3">
                        <h6 className="text-truncate">{product.name}</h6>
                        <small>{product.author} {product.prDate}</small>
                </div>
                
                </div>
            )}
            )
        }
            </div>
    )
}

export default ProductThumbnail;