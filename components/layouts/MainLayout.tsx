import { TopNavbar } from './TopNavbar';
import { Footer } from './Footer';
import { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  mainContent: {
    minHeight: 'calc(100vh - 30px - 60px)',
    border: '1px solid transparent',
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
