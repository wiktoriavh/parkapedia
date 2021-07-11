import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Main } from '../components/layouts/Main';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Main />
      <Component {...pageProps} />
    </>
  );
}
// export default MyApp;

export default appWithTranslation(MyApp);
