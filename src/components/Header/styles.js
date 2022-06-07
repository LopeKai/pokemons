import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    height: 5rem;
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #202020;
    background-image: linear-gradient(#3b3b3b, #202020);
    color: #fff;
    padding: 1rem;

    img {
        display: block;
        width: 10%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
    }
`

export const ContainerLinks = styled.div`
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        text-decoration: none;
        color: #fff;
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
    }
    
`

export const ContainerInput = styled.div`
    flex-basis: 10%;
    display: flex;
    align-items: center;
    background-color: #737373;
    border-radius: .3rem;
    padding-right: 0.5rem;

    input {
        width: 100%;
        padding: 0.5rem;
        border: none;
        outline: none;
        background-color: #737373;
        border-radius: .3rem;
        color: #dbdbdb;
        font-size: 1.05rem;

        &::placeholder {
            color: #dbdbdb;
        }
    }

    svg {
        font-size: 1.5rem;
    }
    
    
`
