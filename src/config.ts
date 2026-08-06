declare global {
  interface Window {
    APP_CONFIG?: {
      API_URL?: string;
      MAIN_APP_URL?: string;
      [key: string]: string | undefined;
    };
  }
}

const getEnv = (key: string, viteFallback: string | undefined, defaultVal: string = ""): string => {
  const windowVal = typeof window !== 'undefined' && window.APP_CONFIG ? window.APP_CONFIG[key] : undefined;
  if (windowVal && !windowVal.startsWith("$")) {
    return windowVal;
  }
  if (viteFallback && !viteFallback.startsWith("$")) {
    return viteFallback;
  }
  return defaultVal;
};

export const APP_CONFIG = {
  API_URL: getEnv("API_URL", import.meta.env.VITE_API_URL, "http://localhost:8002/api/v1"),
  MAIN_APP_URL: getEnv("MAIN_APP_URL", import.meta.env.VITE_MAIN_APP_URL, "http://localhost:5173"),
};
