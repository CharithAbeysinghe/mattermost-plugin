// components/PaginatedTable.tsx

import React, {useState} from 'react';
import styled from 'styled-components';

type Column<T> = {
    header: string;
    accessor: keyof T;
    renderLink?: (row: T) => string;
};

type PaginatedTableProps<T> = {
    data: T[];
    columns: Column<T>[];
    rowsPerPage?: number;
    paginate?:boolean,
    onItemClick?:any
};

const TableWrapper = styled.div`
    width: 100%;
    overflow-x: auto;
    margin-top: 16px;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: var(--center-channel-bg);
    color: var(--center-channel-color);
    font-size: 14px;
`;

const Th = styled.th`
    text-align: left;
    padding: 12px;
    background-color: var(--center-channel-color-08);
    color: var(--center-channel-color);
    border-bottom: 1px solid rgba(var(--center-channel-color-rgb), 0.1);
`;

const Td = styled.td`
    padding: 12px;
    border-bottom: 1px solid rgba(var(--center-channel-color-rgb), 0.08);
`;

const Tr = styled.tr`
    &:hover {
        background-color: #33997014;
    }
`;

const Pagination = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 8px;
    gap: 8px;
`;

const Button = styled.button`
    padding: 6px 12px;
    background-color: var(--button-bg);
    color: var(--button-color);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

function PaginatedTable<T>({data, columns, rowsPerPage = 10,paginate = true,onItemClick}: PaginatedTableProps<T>): JSX.Element {
    const [currentPage, setCurrentPage] = useState(0);

    const start = currentPage * rowsPerPage;
    const end = start + rowsPerPage;
    const pageData = data.slice(start, end);

    const totalPages = Math.ceil(data.length / rowsPerPage);

    return (
        <>
            <TableWrapper>
                <Table>
                    <thead>
                        <Tr>
                            {columns.map((col, idx) => (
                                <Th key={idx}>{col.header}</Th>
                            ))}
                        </Tr>
                    </thead>
                    <tbody>
                        {pageData.map((row, rowIndex) => (
                            <Tr key={rowIndex}>
                                {columns.map((col, colIndex) => (

                                    <Td key={colIndex}>
                                    {col.renderLink ? (
                                        <span onClick={() => onItemClick(col.renderLink?.(row))
                                        
                                        } > {String(row[col.accessor])}</span>

                                        // <a href={col.renderLink(row)} style={{color: 'var(--button-bg)', textDecoration: 'underline'}}>
                                        //     {String(row[col.accessor])}
                                        // </a>
                                    ) : (
                                        String(row[col.accessor])
                                    )}
                                </Td>
                                    // <Td key={colIndex}>{String(row[col.accessor])}</Td>
                                ))}
                            </Tr>
                        ))}
                    </tbody>
                </Table>
            </TableWrapper>
            
            {paginate &&

                <Pagination>
                    <Button onClick={() => setCurrentPage(p => p - 1)} disabled={currentPage === 0}>
                        Prev
                    </Button>
                    <span>
                        Page {currentPage + 1} of {totalPages}
                    </span>
                    <Button onClick={() => setCurrentPage(p => p + 1)} disabled={currentPage + 1 >= totalPages}>
                        Next
                    </Button>
                </Pagination>
            
            }

        </>
    );
}

export default PaginatedTable;
