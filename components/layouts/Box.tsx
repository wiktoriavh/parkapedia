import clsx from 'clsx';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles<
  string,
  { [key: string]: number | true | undefined },
  { [key: string]: string }
>({
  box: {
    margin: (props) => (props.fullWidth ? 0 : '0 20px'),
    width: (props) => `calc((100vw / 12) * ${props.col})`,
  },
});

type BoxProps = {
  children: ReactNode;
  col: number;
  fullWidth?: true | undefined;
} & HTMLAttributes<HTMLDivElement>;

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, col, fullWidth, className, ...other }, ref): JSX.Element => {
    const classes = useStyles({ col, fullWidth });

    return (
      <div ref={ref} className={clsx(classes.box, className)} {...other}>
        {children}
      </div>
    );
  }
);
