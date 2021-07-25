import type { HTMLAttributes, ReactNode } from 'react';
import { createElement, forwardRef } from 'react';

type TableCaptionProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLTableCaptionElement>;

export const TableCaption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
  ({ children, ...tableData }, ref): JSX.Element => {
    return createElement('caption', { ref, ...tableData }, children);
  }
);