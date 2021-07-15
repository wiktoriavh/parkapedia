import { createElement, forwardRef, HTMLAttributes, ReactNode } from 'react';

type TableBodyProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLTableSectionElement>;

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, ...tableData }, ref): JSX.Element => {
    return createElement('tbody', { ref, ...tableData }, children);
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
