import type { HTMLAttributes, ReactNode } from 'react';
import { createElement, forwardRef } from 'react';

type TableProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLTableElement>;

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ children, ...tableData }, ref): JSX.Element => {
    return createElement('table', { ref, ...tableData }, children);
  }
);