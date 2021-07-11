import { ReactNode } from 'react';

export type SvgIconProps = {
  viewBox?: string;
  width?: string | number;
  height?: string | number;
  xmlns?: string;
};

export const SvgIcon = (props: SvgIconProps & { children: ReactNode }): JSX.Element => {
  const { children, ...other } = props;

  return <svg {...other}>{children}</svg>;
};

SvgIcon.defaultProps = {
  viewBox: '0 0 24 24',
  height: 24,
  xmlns: 'http://www.w3.org/2000/svg',
};
