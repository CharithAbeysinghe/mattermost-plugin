import React, {useState, useMemo} from 'react';
import styled from 'styled-components';

type ListItem<T> = {
    id: string;
    title: string;
    subtitle?: string;
    data: T;
};

type PaginatedItemListProps<T> = {
    items: ListItem<T>[];
    onItemClick: (id: string) => void;
    rowsPerPage?: number;
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const SearchInput = styled.input`
    padding: 8px 12px;
    margin-bottom: 12px;
    border: 1px solid rgba(var(--center-channel-color-rgb), 0.16);
    border-radius: 4px;
    background-color: var(--center-channel-bg);
    color: var(--center-channel-color);
    font-size: 14px;
    width: 20%;
`;

const ListWrapper = styled.div`
    background-color: var(--center-channel-bg);
    border: 1px solid rgba(var(--center-channel-color-rgb), 0.08);
    border-radius: 6px;
    overflow: hidden;
`;

const ListItemRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid rgba(var(--center-channel-color-rgb), 0.08);
    cursor: pointer;

    &:hover {
        background-color: #C4313314;
    }

    &:last-child {
        border-bottom: none;
    }
`;

const Title = styled.div`
    font-weight: 500;
    font-size: 15px;
    color: var(--center-channel-color);
`;

const Subtitle = styled.div`
    font-size: 13px;
    color: rgba(var(--center-channel-color-rgb), 0.72);
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
`;

const Button = styled.button`
    background: none;
    border: none;
    font-size: 18px;
    color: var(--button-bg);
    cursor: pointer;
    padding: 0;

    &:hover {
        opacity: 0.8;
    }

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
`;

const Pagination = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 8px 0;
    gap: 12px;
`;

const PageInfo = styled.div`
    font-size: 13px;
    color: rgba(var(--center-channel-color-rgb), 0.56);
`;

function PaginatedItemList<T>({
    items,
    onItemClick,
    rowsPerPage = 5,
}: PaginatedItemListProps<T>): JSX.Element {
    const [currentPage, setCurrentPage] = useState(0);
    const [search, setSearch] = useState('');

    const filteredItems = useMemo(() => {
        const lowerSearch = search.toLowerCase();
        return items.filter(item =>
            item.title.toLowerCase().includes(lowerSearch) ||
            (item.subtitle && item.subtitle.toLowerCase().includes(lowerSearch))
        );
    }, [search, items]);

    const totalPages = Math.ceil(filteredItems.length / rowsPerPage);
    const start = currentPage * rowsPerPage;
    const end = start + rowsPerPage;
    const currentItems = filteredItems.slice(start, end);

    const handlePrev = () => setCurrentPage(p => Math.max(p - 1, 0));
    const handleNext = () => setCurrentPage(p => Math.min(p + 1, totalPages - 1));

    return (
        <Wrapper>
            <SearchInput
                type="text"
                placeholder="Search..."
                value={search}
                onChange={e => {
                    setSearch(e.target.value);
                    setCurrentPage(0);
                }}
            />
            <ListWrapper>
                {currentItems.map(item => (
                    <ListItemRow key={item.id} onClick={() => onItemClick(item.id)}>
                        <Left>
                            <Title>{item.title}</Title>
                            {item.subtitle && <Subtitle>{item.subtitle}</Subtitle>}
                        </Left>
                        <Button aria-label="Go to details">→</Button>
                    </ListItemRow>
                ))}
                {currentItems.length === 0 && (
                    <ListItemRow>
                        <Title>No results found</Title>
                    </ListItemRow>
                )}
            </ListWrapper>
            {totalPages > 1 && (
                <Pagination>
                    <Button onClick={handlePrev} disabled={currentPage === 0}>
                        Prev
                    </Button>
                    <PageInfo>
                        Page {currentPage + 1} of {totalPages}
                    </PageInfo>
                    <Button onClick={handleNext} disabled={currentPage + 1 >= totalPages}>
                        Next
                    </Button>
                </Pagination>
            )}
        </Wrapper>
    );
}

export default PaginatedItemList;
