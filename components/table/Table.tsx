import { createElement, forwardRef, HTMLAttributes, ReactNode } from 'react';

type TableProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLTableElement>;

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ children, ...tableData }, ref): JSX.Element => {
    return createElement('table', { ref, ...tableData }, children);
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
