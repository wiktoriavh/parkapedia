import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Heading } from '../components/typography/Heading';
import { Locale } from '../utils/i18nextTypes';

export default function Home(): JSX.Element {
  return (
    <div>
      <Heading component={1}>I am a title</Heading>
    </div>
  );
}

export const getStaticProps = async ({ locale }: { locale: Locale }) => {
  if (!locale) {
    throw new Error('locale is undefined.');
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};
