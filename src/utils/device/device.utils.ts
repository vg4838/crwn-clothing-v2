// Device detection utilities for cross-platform authentication

export const isIOS = (): boolean => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};

export const isIOSSafari = (): boolean => {
  const ua = navigator.userAgent;
  return isIOS() && /Safari/.test(ua) && !/CriOS|FxiOS|OPiOS|mercury/.test(ua);
};

export const shouldUseRedirectFlow = (): boolean => {
  // Use redirect flow for all iOS devices (Safari, Chrome, Firefox, etc.)
  // since they all use Safari's WebKit engine with popup restrictions
  return isIOS();
};
