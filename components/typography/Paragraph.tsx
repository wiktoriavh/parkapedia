import type { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  paragraph: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 35,
    marginLeft: 20,
  },
});

export function Paragraph({ children }: { children: ReactNode }) {
  const classes = useStyles();

  return <p className={classes.paragraph}>{children}</p>;
}
