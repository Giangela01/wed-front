import React from 'react';
import { useEffect, useState } from 'react'

const Footer = (props) => {

    //Thank you: https://www.digitalocean.com/community/tutorials/react-countdown-timer-react-hooks

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`${year}-02-14`) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      const [] = useState(new Date().getFullYear());
    
      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
    
        timerComponents.push(<>
          <span className='footer-font'>
            {timeLeft[interval]} {interval}{" "} till 
          </span><span className='footer-ido'>"i do."</span></>
        );
      });
    return <div className='footer-bg'>{timerComponents.length ? timerComponents : <span>Today is the Day!</span>}</div>
};

export default Footer;