import React from 'react'
import banner from '../images/banner.jpg'


const contentStyle = {
  textAlign: 'center',
};
const Banner = () =>{


return (
  <>
  <div autoplay style={{borderRadius:"5px"}}>
    <div style={contentStyle} >
      <img src={banner} style={{maxHeight:"100%",maxWidth:"100%"}}></img>
    </div>
  </div>,
  </>
);
}

export default Banner;