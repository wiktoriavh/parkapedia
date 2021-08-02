import type { UserConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Box } from '../components/layouts/Box';
import { HeadingSection } from '../components/layouts/HeadingSection';
import { BiomeGraph } from '../components/styled/BiomeGraph';
import type { Locale } from '../utils/i18nextTypes';

export default function Home(): JSX.Element {
  return (
    <div>
      <Box col={6}>
        Nothing to see here yet.
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
      ...(await serverSideTranslations(locale, ['common', 'biomes'])),
    },
  };
};
