import Head from 'next/Head';
import Link from 'next/Link';
import { useTranslation } from 'react-i18next';
import { topNavigations } from '../../utils/topNavigation';

import { createUseStyles } from 'react-jss';
import { maxWidth } from '../../utils/breakpoints';

const useStyles = createUseStyles({
  topNavigation: {
    backgroundColor: 'salmon',
    height: 60,
  },
  topNavigationList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: maxWidth,
    margin: 'auto',
    height: '100%',

    '& > li': {
      listStyle: 'none',
    },
  },
});

export const Main = (): JSX.Element => {
  const { t } = useTranslation('common');

  const classes = useStyles();

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/zao8law.css"></link>
      </Head>
      <nav className={classes.topNavigation}>
        <ul className={classes.topNavigationList}>
          {topNavigations.map((navigation, index) => {
            return (
              <li key={`${index}-${navigation.name}`}>
                <Link href={navigation.href}>
                  <a>{t(navigation.name)}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
