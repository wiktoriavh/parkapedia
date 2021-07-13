import type { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  paragraph: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 1.7,
    marginLeft: 20,
  },
});

export function Paragraph({ children }: { children: ReactNode }): JSX.Element {
  const classes = useStyles();

  return <p className={classes.paragraph}>{children}</p>;
}
