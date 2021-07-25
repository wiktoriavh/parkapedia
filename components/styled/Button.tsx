import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles<string, unknown, { [key: string]: string }>(
  (theme) => ({
    button: {
      fontFamily: 'gooddog-new',
      fontSize: 20,
      backgroundColor: theme.yellow,
      border: 0,
      borderRadius: 8,
      padding: '5px 20px',
      borderBottom: '3px solid #F4BF01',
      color: 'rgba(0,0,0,0.7)',

      '&:hover': {
        backgroundColor: '#F9C700',
      },

      '&:active': {
        backgroundColor: '#F4BF01',
      },
    },
  })
);

type ButtonProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...other }: ButtonProps): JSX.Element {
  const classes = useStyles();

  return (
    <button type="button" className={clsx(classes.button, className)} {...other}>
      {children}
    </button>
  );
}
