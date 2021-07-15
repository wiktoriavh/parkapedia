import { createElement, forwardRef, HTMLAttributes, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

const useStyles = createUseStyles<string, unknown, { [key: string]: string }>(
  (theme) => ({
    tableRow: {
      backgroundColor: 'white',
      borderTop: `5px solid ${theme.creme}`,
      borderBottom: `5px solid ${theme.creme}`,
    },
  })
);

type TableRowProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLTableRowElement>;

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, className, ...tableData }, ref): JSX.Element => {
    const classes = useStyles();
    const classNames = clsx(classes.tableRow, className);

    return createElement('tr', { ref, ...tableData, className: classNames }, children);
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
