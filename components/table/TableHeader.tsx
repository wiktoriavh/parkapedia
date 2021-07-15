import { createElement, forwardRef, HTMLAttributes, ReactNode } from 'react';

type TableHeaderProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLTableCellElement>;

export const TableHeader = forwardRef<HTMLTableCellElement, TableHeaderProps>(
  ({ children, ...tableData }, ref): JSX.Element => {
    return createElement('th', { ref, ...tableData }, children);
  }
);

/*
<table>
    <thead>
        <tr>
            <th colspan="2">The table header</th>
        </tr>

    </thead>
    <tbody>
        <tr>
            <td>The table body</td>
            <td>with two columns</td>
        </tr>
    </tbody>
</table>

*/
