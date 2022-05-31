import styled from 'styled-components'

export const Container = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 4rem;
    padding: 4rem 0;
`

export const Ul = styled.ul `
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    flex-wrap: wrap;
`

export const ButtonNext = styled.button `
    width: 30%;
    margin: 0 auto;
    padding: 1.5rem 3rem;
    border: none;
    outline: none;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 400;
    border-radius: .3rem;
    cursor: pointer;
    background-color: var(--color-primary);
`