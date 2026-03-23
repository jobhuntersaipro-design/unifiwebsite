declare global {
  interface Window {
    gtag?: (command: string, action: string, config: Record<string, unknown>) => void;
  }
}

export const GA_ADS_ID = 'AW-18035024732';

export function fireWhatsAppConversion() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-18035024732/-vAMCN3e840cENzG4pdD',
      value: 1.0,
      currency: 'MYR',
    });
  }
}
