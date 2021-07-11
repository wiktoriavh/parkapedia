import Link from 'next/Link';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';

import { maxWidth } from '../../utils/breakpoints';
import { topNavigations } from '../../utils/topNavigation';

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

export function TopNavbar(): JSX.Element {
  const { t } = useTranslation('common');

  const classes = useStyles();

  return (
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
  );
}
