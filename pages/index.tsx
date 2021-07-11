import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Heading } from '../components/typography/Heading';

export default function Home() {
  return (
    <div>
      <Heading variant={1}>I am a title</Heading>
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string | undefined }) {
  if (!locale) {
    throw new Error('locale is undefined.');
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
