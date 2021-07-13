import type { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

import { Footer } from './Footer';
import { TopNavbar } from './TopNavbar';

const useStyles = createUseStyles({
  mainContent: {
    minHeight: 'calc(100vh - 30px - 60px)',
  },
});

export function MainLayout({ children }: { children: ReactNode }): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <TopNavbar />
      <main className={classes.mainContent}>{children}</main>
      <Footer />
    </>
  );
}
