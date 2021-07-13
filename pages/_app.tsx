import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

import { TopNavbar } from '../components/layouts/TopNavbar';
import { ThemeProvider } from 'react-jss';
import { parkasaurusTheme } from '../utils/colors';
import { MainLayout } from '../components/layouts/MainLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={parkasaurusTheme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
// export default MyApp;

export default appWithTranslation(MyApp);
