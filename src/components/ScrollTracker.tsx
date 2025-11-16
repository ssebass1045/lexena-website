
'use client';

import { useEffect, useState } from 'react';
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics';

const ScrollTracker = () => {
  const { trackScrollDepth, trackTimeOnPage } = useGoogleAnalytics();
  const [startTime] = useState(Date.now());
  const [maxScrollDepth, setMaxScrollDepth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableDistance = documentHeight - windowHeight;
      const scrollPercentage = (scrollTop / scrollableDistance) * 100;
      
      if (scrollPercentage > maxScrollDepth) {
        setMaxScrollDepth(scrollPercentage);
        trackScrollDepth(window.location.pathname, Math.round(scrollPercentage));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [maxScrollDepth, trackScrollDepth]);

  useEffect(() => {
    const trackTime = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackTimeOnPage(window.location.pathname, timeSpent);
    };

    // Track time when user leaves the page
    window.addEventListener('beforeunload', trackTime);
    
    // Track time every 30 seconds
    const interval = setInterval(trackTime, 30000);

    return () => {
      window.removeEventListener('beforeunload', trackTime);
      clearInterval(interval);
      trackTime(); // Final track when component unmounts
    };
  }, [startTime, trackTimeOnPage]);

  return null;
};

export default ScrollTracker;