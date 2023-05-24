import Link from 'next/Link';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';

import { Text } from '../typography/Text';

const useStyles = createUseStyles({
  footer: {
    height: 30,
    display: 'flex',
    justifyContent: 'center',
  },
  footerItem: {
    margin: '0 8px',
    textDecoration: 'none',
    color: 'black',
  },
});

export function Footer(): JSX.Element {
  const classes = useStyles();

  const { t } = useTranslation(['biomes', 'common']);

  return (
    <footer className={classes.footer}>
      <Link href="/impressum" passHref>
        <a className={classes.footerItem}>Impressum, aber in Englisch NICHT VERGESSEN</a>
      </Link>
      <Link href="/datenschutz" passHref>
        <a className={classes.footerItem}>{t('common:privacyPolicy')}</a>
      </Link>
      <p>{t('biomes:etwas')}</p>
    </footer>
  );
}
