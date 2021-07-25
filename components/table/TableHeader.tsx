import type { HTMLAttributes, ReactNode } from 'react';
import { createElement, forwardRef } from 'react';

type TableHeaderProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLTableCellElement>;

export const TableHeader = forwardRef<HTMLTableCellElement, TableHeaderProps>(
  ({ children, ...tableData }, ref): JSX.Element => {
    return createElement('th', { ref, ...tableData }, children);
  }
);
