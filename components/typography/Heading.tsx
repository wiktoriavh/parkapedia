import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import { createUseStyles } from 'react-jss';

import { DinoFootprintIcon } from '../SvgIcons/DinoFootprint';

type ComponentVariantTypes = 'h1' | 1 | 'h2' | 2;
// | 'h3'
// | 3
// | 'h4'
// | 4
// | 'h5'
// | 5
// | 'h6'
// | 6;

type HeadingProps = {
  variant?: ComponentVariantTypes;
  component: ComponentVariantTypes;
  children: ReactNode;
} & HTMLAttributes<HTMLHeadingElement>;

const useStyles = createUseStyles<string, { [key: string]: string }, unknown>({
  heading: {
    fontFamily: 'Poppins',
    '&:hover $headingLink': {
      opacity: 1,
    },
  },
  h1: {
    fontWeight: 800,
    fontSize: 26,
    textTransform: 'uppercase',
  },
  h2: {
    fontWeight: 600,
    fontSize: 26,
    letterSpacing: 1.3,
  },
  headingLink: {
    opacity: 0,
  },
});

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const { variant, component, children, ...other } = props;
  const classes = useStyles();

  const Component: keyof JSX.IntrinsicElements =
    typeof component === 'number' ? `h${component}` : component;
  const variantType = typeof variant === 'number' ? `h${variant}` : variant;

  const classNames = clsx(
    classes.heading,
    classes[variantType ? variantType : Component],
    other.className
  );

  return (
    <Component className={classNames} ref={ref} {...other}>
      <a
        href={`#${typeof children === 'string' ? children.replace(/\s/gu, '-') : ''}`}
        className={classes.headingLink}
      >
        <DinoFootprintIcon />
      </a>
      {children}
    </Component>
  );
});
