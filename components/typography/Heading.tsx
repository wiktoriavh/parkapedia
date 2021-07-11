import { createElement, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import { DinoFootprintIcon } from '../SvgIcons/DinoFootprint';


type ComponentVariantTypes =
  | 'h1'
  | 1
  | 'h2'
  | 2
  | 'h3'
  | 3
  | 'h4'
  | 4
  | 'h5'
  | 5
  | 'h6'
  | 6;

type HeadingProps = {
  variant?: ComponentVariantTypes;
  component: ComponentVariantTypes;
  children: ReactNode;
};

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

export const Heading = ({ variant, component, children }: HeadingProps): JSX.Element => {
  const classes = useStyles();

  if (typeof variant === 'number') {
    variant = `h${variant}`;
  }

  if (typeof component === 'number') {
    component = `h${component}`;
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

  const Heading = createElement(
    component ? component : variant,
    { className: clsx(classes.heading, headingStyle[variant]) },
    [HeadingLink, children]
  );

  return Heading;
};
