import styled from 'styled-components'

export const Container = styled.header `
    width: 100%;
    height: 5rem;
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary);
    color: #fff;

    h1 {
        font-size: 2.5rem;
    }
`