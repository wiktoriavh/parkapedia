import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'react-jss';

import { MainLayout } from '../components/layouts/MainLayout';
import { parkasaurusTheme } from '../utils/colors';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={parkasaurusTheme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
