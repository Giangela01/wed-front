import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from "react";

const Home = () => {
    const urlImg = "https://wed-backend.herokuapp.com/images/";
  const [image, setImage] = useState([]);
  const getImage = async () => {
    const response = await fetch(urlImg);
    const data = await response.json();
    setImage(data);
  };
useEffect(() => {
    getImage();
  },[])
    return (
    <div className='home-center'>
        <h1 className='home-h1'>Don & Marge</h1>
        <h5 className='home-h5'>February 14, 2022 | @4:30PM</h5>
        <p className='home-p font'>Formal black tie affair</p>
            <a href="/Rsvp" rel="noreferrer"><button className='btn  btn-rsvp' type="button">RSVP</button></a>
        <div className='home-details'>
        </div>
        <Carousel>
                <div className='img-size'>
                    <img src="https://assets3.thrillist.com/v1/image/2964883/1584x1056/crop;webp=auto;jpeg_quality=60;progressive.jpg" alt='1'/>
                </div>
                <div className='img-size'>
                    <img src="https://s3.us-west-2.amazonaws.com/images.herecomestheguide.com/images/featured/_1200x630_crop_center-center_82_none/Skybar-MichaelaJoyPhotography_2021-09-16-144524_cbag.jpg" alt='2'/>
                </div>
                <div className='img-size'>
                    <img src="https://www.nuptials.ph/wp-content/uploads/2021/05/pexels-transtudios-photography-video-3156648-1-scaled.jpg" alt='3' />
                </div>
                <div className='img-size'>
                    <img src="https://cdn0.weddingwire.com/vendor/881079/3_2/960/jpg/1538025223-845dd71238cf12d7-1538025218-05ea84dd8df0dbda-1538025132446-12-Wedding_Wire-13.jpeg" alt='4'/>
                </div>
        </Carousel>
    </div>
    )
};

export default Home