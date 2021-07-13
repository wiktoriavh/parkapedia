import type { HTMLAttributes, ReactNode } from 'react';
import { createElement, forwardRef } from 'react';

type TextProps = {
  children: ReactNode;
  component: string | number;
} & HTMLAttributes<HTMLElement>;

export type TextRef = HTMLElement;

export const Text = forwardRef<TextRef, TextProps>(
  ({ children, component, ...other }, ref): JSX.Element => {
    let componentType = '';

    if (typeof component === 'number') {
      componentType = `h${component}`;
    } else {
      componentType = component;
    }

    return createElement(componentType, { ref, ...other }, children);
  }
);
