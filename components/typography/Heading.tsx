import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import { createElement } from 'react';
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
} & HTMLAttributes<HTMLElement>;

const useStyles = createUseStyles({
  heading: {
    fontFamily: 'Poppins',
    '&:hover $headingLink': {
      opacity: 1,
    },
  },
  headingOne: {
    fontWeight: 800,
    fontSize: 26,
    textTransform: 'uppercase',
  },
  headingTwo: {
    fontWeight: 600,
    fontSize: 26,
    letterSpacing: 1.3,
  },
  headingLink: {
    opacity: 0,
  },
});

export function Heading({
  variant,
  component,
  children,
  ...other
}: HeadingProps): JSX.Element {
  const classes = useStyles();

  let variantType = '';
  let componentType = '';

  if (typeof variant === 'number') {
    variantType = `h${variant}`;
  } else if (variant) {
    variantType = variant;
  }

  if (typeof component === 'number') {
    componentType = `h${component}`;
  } else {
    componentType = component;
  }

  const headingStyle: { [key: string]: string } = {
    h1: classes.headingOne,
    h2: classes.headingTwo,
  };

  const HeadingLink = createElement(
    'a',
    {
      href: `#${typeof children === 'string' && children.replace(/\s/gu, '-')}`,
      className: classes.headingLink,
    },
    <DinoFootprintIcon />
  );

  return createElement(
    componentType,
    {
      className: clsx(
        classes.heading,
        headingStyle[variantType ? variantType : componentType],
        other.className
      ),
    },
    [HeadingLink, children]
  );
}
