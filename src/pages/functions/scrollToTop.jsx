import React, { useState, useEffect } from 'react';
import { ArrowUpOutlined } from '@ant-design/icons';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const totalHeight = document.body.clientHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / totalHeight) * 100;
    setIsVisible(scrollPercentage > 75);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
      onMouseOver={(event) => {
        event.target.classList.add('hover');
      }}
      onMouseOut={(event) => {
        event.target.classList.remove('hover');
      }}
    >
      <ArrowUpOutlined />
    </button>
  );
};

export default ScrollToTopButton;
