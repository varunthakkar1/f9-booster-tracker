import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 20%;
    justify-content: center;
    align-items: center;
`;

interface SearchBarProps {
    onSubmit: () => void;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    inputValue: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit, onChange, inputValue }) => {
    return (
        <Container>
            <form onSubmit={e => e.preventDefault()}>
                <input type='text' onChange={onChange} value={inputValue}/>
                <button onClick={onSubmit}>Submit</button>
            </form>
        </Container>
    );
};

export default SearchBar;