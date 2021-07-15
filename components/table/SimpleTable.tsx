import React from 'react';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableData } from './TableData';
import { TableRow } from './TableRow';

type SimpleTableProps = {
  data: data;
};

type data = string[][];

export function SimpleTable({ data }: SimpleTableProps): JSX.Element {
  return (
    <Table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <TableBody>
        {data.map((row) => {
          return (
            <TableRow>
              {row.map((cell) => {
                return <TableData>{cell}</TableData>;
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
