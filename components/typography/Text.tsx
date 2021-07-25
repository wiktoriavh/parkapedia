import type { ReactNode } from 'react';
import { forwardRef } from 'react';

type TextProps<T extends keyof JSX.IntrinsicElements | number> = {
  children: ReactNode;
  component: T;
} & JSX.IntrinsicElements[T extends number ? 'h1' : T];

const defaultComponentMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  span: 'span',
  strong: 'strong',
  em: 'em',
  b: 'b',
  i: 'i',
  u: 'u',
  s: 's',
  sub: 'sub',
  sup: 'sup',
} as const;

declare function GenericText<Tag extends keyof typeof defaultComponentMapping | number>(
  props: TextProps<Tag>
): JSX.Element;

function mapComponent<T extends Record<string, keyof JSX.IntrinsicElements>>(
  mapping: T,
  input: string | number
): T[keyof T] {
  const key = typeof input === 'number' ? `h${~~input}` : input;
  if (!(key in mapping)) throw 'Illegal element'; // Check for invalid props that snuck past type checking? I dunno
  return mapping[key as keyof typeof mapping];
}

export const Text = forwardRef<HTMLElement, TextProps<any>>((props, ref): JSX.Element => {
  const { children, component, ...other } = props;
  const Component = mapComponent(defaultComponentMapping, component);

  return (
    <Component ref={ref} {...other}>
      {children}
    </Component>
  );
}) as typeof GenericText;
