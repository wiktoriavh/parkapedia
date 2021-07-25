import type { HTMLAttributes, ReactNode } from 'react';
import { createElement, forwardRef } from 'react';

type TableFooterProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLTableSectionElement>;

export const TableFooter = forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ children, ...tableData }, ref): JSX.Element => {
    return createElement('tfoot', { ref, ...tableData }, children);
  }
);
