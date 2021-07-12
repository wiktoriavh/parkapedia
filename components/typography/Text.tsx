import type { HTMLAttributes, ReactNode } from 'react';
import { createElement, forwardRef } from 'react';

type TextProps = {
  children: ReactNode;
  component: string | number;
} & HTMLAttributes<HTMLElement>;

export type TextRef = HTMLElement;

export const Text = forwardRef<TextRef, TextProps>(
  ({ children, component, ...other }, ref): JSX.Element => {
    if (typeof component === 'number') {
      component = `h${component}`;
    }

    return createElement(component, { ref, ...other }, children);
  }
);

Text.defaultProps = {
  component: 'span',
};
