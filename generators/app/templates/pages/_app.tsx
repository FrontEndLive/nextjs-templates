import '@/theme/global.css';
import type { AppProps } from 'next/app';

function BasePage({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}

export default BasePage;
