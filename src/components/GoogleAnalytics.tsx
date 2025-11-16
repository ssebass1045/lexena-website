'use client';

import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google';

const GoogleAnalytics = () => {
  // Reemplaza 'G-XXXXXXXXXX' con tu Measurement ID real
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
  
  if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
    console.warn('Google Analytics Measurement ID no configurado');
    return null;
  }

  return <NextGoogleAnalytics gaId={measurementId} />;
};

export default GoogleAnalytics;