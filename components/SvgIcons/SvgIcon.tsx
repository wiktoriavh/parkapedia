import type { SVGProps, PropsWithoutRef } from 'react';

export type SvgIconProps = PropsWithoutRef<SVGProps<SVGElement>>;
export function SvgIcon(props: SvgIconProps): JSX.Element {
  const { children, ...other } = props;

  return <svg {...other}>{children}</svg>;
}

SvgIcon.defaultProps = {
  viewBox: '0 0 24 24',
  height: 24,
  xmlns: 'http://www.w3.org/2000/svg',
};
