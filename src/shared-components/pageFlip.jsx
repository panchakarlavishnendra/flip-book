import React, { Component } from 'react';
import HTMLFlipBook from "react-pageflip";

class pageFlip extends Component {
  constructor(props) {
    super(props);
  }
  state = {  }

  importAll(r) {
    return r.keys().map(r);
  }

  render() { 
    let productDetail = this.props;
    let images,bookImg=[];
      
    images = this.importAll(require.context("../images", false, /\.(png|jpe?g|svg)$/));
    
    images && images.map((element)=>{
      if (element.includes(`${productDetail.productDetail.code}`)){
        bookImg.push(element)
      }
    })

    return ( <div>
      <HTMLFlipBook width={300} height={500}>
        {bookImg && bookImg.map((element)=>{
          return (
            <div className="demoPage">
              <img src={element} alt="person" width={"300px"} height={"500px"}/>
            </div>
          )
        })}
      </HTMLFlipBook>
    </div> );
  }
}
 
export default pageFlip;