import type { UserConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Box } from '../components/layouts/Box';

import { HeadingSection } from '../components/layouts/HeadingSection';
import { Button } from '../components/styled/Button';
import { KeyValuePair } from '../components/table/KeyValuePair';
import { SimpleTable } from '../components/table/SimpleTable';
import type { Locale } from '../utils/i18nextTypes';

export default function Home(): JSX.Element {
  return (
    <div>
      <HeadingSection title="I am a Heading, yo" />
      <Box col={6}>
        <SimpleTable
          data={[
            ['Dino', 'tier 2', 'herd', 'rainforest'],
            ['Dino 2', 'tier 1', 'mate', 'swamp'],
          ]}
        />
        <KeyValuePair typeColor="blue" label={'Type Species'} value={150} />
        <KeyValuePair typeColor="yellow" label={'Type Species'} value={150} />
      </Box>
    </div>
  );
}

export const getStaticProps = async ({
  locale,
}: {
  locale: Locale;
}): Promise<{
  props: {
    _nextI18Next: {
      initialI18nStore: Record<string, unknown>;
      initialLocale: string;
      userConfig: UserConfig | null;
    };
  };
}> => {
  if (!locale) {
    throw new Error('locale is undefined.');
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};
