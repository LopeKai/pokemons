import styled from 'styled-components'

export const Li = styled.li`
    box-shadow: 0 0 8px #000 ;
    border-radius: 15px 0 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 20rem;
    padding: 0rem 0rem 0rem;
    
    background-color: ${props => {
        switch (props.type) {
            case 'grass':
                return '#00800080'
                break
            case 'water':
                return '#00b7ffa1'
                break
            case 'bug':
                return '#a52a2ae1'
                break
            case 'normal':
                return '#8ca4f3e1'
                break
            case 'fire':
                return '#ff000da1'
                break
            case 'poison':
                return '#830583a9'
                break
            case 'electric':
                return '#ffff00'
                break
            case 'ground':
                return '#1f1f1598'
                break
            case 'fairy':
                return '#ffc0cb'
                break
            case 'fighting':
                return '#800000cb'
                break
            case 'psychic':
                return '#aaa820cb'
                break
            case 'rock':
                return '#7e7e7e'
                break
            case 'ghost':
                return '#4b0082'
                break
            case 'ice':
                return '#f4f4f4'
                break
            case 'dragon':
                return '#474747'
                break
        }

    }} ;
    header {
        width: 100%;
        display:flex;
        align-items: center;
        justify-content: space-between;
        height: 3rem;
        padding: 0 2rem;
        border-bottom: 1px solid #fff;

        strong {
            display: block;
            font-size: 1.5rem;
            font-weight: 400;
            color: #fff;

        }
    }
`
export const ImgPokemon = styled.img`
    flex-basis: 50%;
    display: block;
    height: 50%;
    object-fit: cover;
`

export const Title = styled.p`
    font-size: 1.4rem;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
`
