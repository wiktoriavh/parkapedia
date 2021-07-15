import { createElement, forwardRef, HTMLAttributes, ReactNode } from 'react';

type TableCaptionProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLTableCaptionElement>;

export const TableCaption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
  ({ children, ...tableData }, ref): JSX.Element => {
    return createElement('caption', { ref, ...tableData }, children);
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
