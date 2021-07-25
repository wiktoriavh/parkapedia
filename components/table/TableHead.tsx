import type { HTMLAttributes, ReactNode } from 'react';
import { createElement, forwardRef } from 'react';

type TableHeadProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLTableSectionElement>;

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ children, ...tableData }, ref): JSX.Element => {
    return createElement('thead', { ref, ...tableData }, children);
  }
);
