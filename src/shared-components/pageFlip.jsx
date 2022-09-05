import React, { useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { Button } from 'react-bootstrap';


const PageFlip = (props) => {
  const book = useRef();

  const importAll = (r) => {
    return r.keys().map(r);
  }
  let productDetail;
  let images = [];
  const [bookImgs, setBookImages] = useState();
  const [orientation, setOrientation] = useState("P");
  let bookImg = [];
  let width,height;

  useEffect(() => {
    productDetail = props;

    images = importAll(require.context("../images", false, /\.(png|jpe?g|svg)$/));

    images && images.map((element) => {
      if (element.includes(`${productDetail.productDetail.code}`)) {
        console.log(element, "element-1")
        bookImg.push(element)
      }
    })
    setBookImages(bookImg);
  }, [props]);


  document.onkeydown = checkKey;
  function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
      // left arrow
      book.current.pageFlip().flipPrev()
    }
    else if (e.keyCode == '39') {
      // right arrow
      book.current.pageFlip().flipNext()
    }

  }

  if (orientation === "P"){
    width = "300px";
    height = "500px"
  }else{
    width = "500px";
    height = "300px"
  }

  function changeOrientation () {
    if (orientation === "P"){
      setOrientation("L");
    }else{
      setOrientation("P");
    }
  }

  return (<div>
    {/* <Button variant="primary" onClick={()=>changeOrientation()}>Change Orientation</Button> */}
    
    <HTMLFlipBook width={300} height={500} ref={book}>
      {bookImgs && bookImgs.map((element, i) => {
        return (
          <div className="demoPage"   >
            <img src={element} alt="person" width={width} height={height} />
          </div>
        )
      })}
    </HTMLFlipBook>
  </div>);
}


export default PageFlip;