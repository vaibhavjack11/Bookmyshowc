import React from 'react'
import { Carousel } from 'antd';
import '../css/carousal.css';
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
const contentStyle = {
  maxHeight: '160px',
  maxWidth:"1300px",
  color: '#fff',
  lineHeight: '160px',
  background: '#364d79',
  display: 'flex',
  justifyContent:'center'
  
};


let img1 = image1;
let img2 = image2;
let img3 = image3;
let img4 = image4;
const Carousals = () =>{
return (
  <>
  <Carousel autoplay>
    <div style={contentStyle}>
      <div >
      <img src={img1} className="image-carousal" />
      </div>
    </div>
    <div>
      <img src={img2} className="image-carousal"/>
    </div>
    <div >
      <img src={img3} className="image-carousal"/>
    </div>
    <div >
      <img src={img4} className="image-carousal"/>
    </div>
  </Carousel>,
  </>
);
}

export default Carousals; 