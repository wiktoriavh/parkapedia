import type { HTMLAttributes, ReactNode } from 'react';
import { createElement, forwardRef } from 'react';

type TableBodyProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLTableSectionElement>;

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, ...tableData }, ref): JSX.Element => {
    return createElement('tbody', { ref, ...tableData }, children);
  }
);
