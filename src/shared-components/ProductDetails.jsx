import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import PdfThumbnail from "./pdfThumbnail";
import Modal from 'react-bootstrap/Modal';
import pdf from '../pdf/pdf.pdf';
import PageFlip from "./pageFlip";
const ProductDetails = (props) => {
    console.log(props,"prop-1")
    const [productDetail,setProductdetail] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        setProductdetail(props.selectedProduct);
    }, [props]);

    const readPdf = () => {
        handleShow();
        // console.log(props.selectedProduct)
        // window.open(`${props.selectedProduct.url}`)
    }

    const downloadPDF = () => {
        if (productDetail.fileDownloadUrl) {
            window.open(productDetail.fileDownloadUrl, '_blank');
        } else {
            return false;
        }
    }

    return (
        <>
        <div>
        {productDetail !== undefined ? 
         <div className="product-details-container">
                <div className="row p-5" >
                    <div className="product-details order-sm-1 order-md-0 col-sm-12 col-md-8">
                        <h2 className="mb-4">{productDetail.name}</h2>
                        <h4 className="text-muted">{productDetail.author} <small>{productDetail.prDate}</small></h4>
                        <hr className="mt-5" />
                        <p className="py-5">{productDetail.details}</p>
                        <div className="button-container d-flex flex-sm-column flex-md-row flex-sm-wrap flex-md-nowrap align-item-center justify-content-between">
                            <Button variant="primary" onClick={readPdf}>Read PDF</Button>
                            {/* <Button variant="primary" onClick={downloadPDF}>Download PDF</Button> */}
                        </div>
                    </div>
                    <div className="product-image order-sm-0 order-md-1 col-sm-12 col-md-4 py-3">
                        <img className="flex-shrink-1" src={productDetail.imgUrl} alt="Pic 1" />
                        {/* <PdfThumbnail width={200} page={1} fileLocation={productDetail.fileLocation?productDetail.fileLocation:pdf}/> */}
                    </div>
                </div>
            </div>
            : ""}
            </div>
            
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body className="pb-5">
                    <div className="flipContainer">
                        <PageFlip productDetail={productDetail}/>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ProductDetails;