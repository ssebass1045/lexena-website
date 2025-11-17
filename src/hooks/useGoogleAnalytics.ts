'use client';

import { useCallback } from 'react';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export const useGoogleAnalytics = () => {
  const trackEvent = useCallback((
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  }, []);

  const trackPageView = useCallback((url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-K800JCNC1X', {
        page_path: url,
      });
    }
  }, []);

  const trackWhatsAppClick = useCallback((location: string, label?: string) => {
    trackEvent('whatsapp_click', 'Contact', label || location, 1);
  }, [trackEvent]);

  const trackConsultationClick = useCallback((location: string, service?: string) => {
    trackEvent('consultation_click', 'Lead', `${location} - ${service || 'General'}`, 1);
  }, [trackEvent]);

  const trackTimeOnPage = useCallback((page: string, seconds: number) => {
    trackEvent('time_spent', 'Engagement', page, seconds);
  }, [trackEvent]);

  const trackScrollDepth = useCallback((page: string, depth: number) => {
    trackEvent('scroll_depth', 'Engagement', page, depth);
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    trackWhatsAppClick,
    trackConsultationClick,
    trackTimeOnPage,
    trackScrollDepth,
  };
};