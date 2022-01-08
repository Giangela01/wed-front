import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const imgGallery = () => {
    return (
        <div><h4 className='img-title'>Our Gallery</h4>
        <Carousel>
                <div className='img-size'>
                    <img src="https://images.ctfassets.net/77l22z9el0aa/3ZF6CHQ0pC1HEN35xAoj8Y/72d5c52e9b4075bdcb8c87d43bf98a4b/inline_unsplash_1_.jpg" alt='1'/>
                </div>
                <div className='img-size'>
                    <img src="https://www.topconsumerreviews.com/best-prenuptial-agreement-services/images/body-prenuptial-agreements-3.jpg" alt='2'/>
                </div>
                <div className='img-size'>
                    <img src="https://www.nuptials.ph/wp-content/uploads/2021/05/pexels-transtudios-photography-video-3156648-1-scaled.jpg" alt='3' />
                </div>
                <div className='img-size'>
                    <img src="https://cdn0.weddingwire.com/vendor/881079/3_2/960/jpg/1538025223-845dd71238cf12d7-1538025218-05ea84dd8df0dbda-1538025132446-12-Wedding_Wire-13.jpeg" alt='4'/>
                </div>
                <div className='img-size'>
                    <img src="https://s.wsj.net/public/resources/images/BI-AA911A_PRENU_M_20150225132728.jpg" alt='5'/>
                </div>
                <div className='img-size'>
                    <img src="https://bhlawtexas.com/wp-content/uploads/2020/03/How-Do-Prenuptial-Agreements-Work-in-Texas.jpg" alt='6'/>
                </div>
        </Carousel></div>

    )
};

export default imgGallery;