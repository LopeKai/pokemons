import styled from 'styled-components'

export const Li = styled.div`
    position: relative;
    box-shadow: 0 0 8px #000 ;
    border-radius: 15px 0 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 26rem;
    overflow: hidden;
    z-index: 1;
    background-color: #fff;
    
    header {
        width: 100%;
        display:flex;
        align-items: center;
        justify-content: space-between;
        height: 0rem; 
        padding: 1rem 2rem;
        z-index: 1;

        strong {
            display: block;
            font-size: 1.5rem;
            font-weight: 400;
            color: #fff;
        }

        span {
            border: 1px solid #fff;
            background-color: #fff;
            padding: 0.3rem;
            border-radius: .8rem;

        }
    }
`
export const BgColor = styled.div`
    position: absolute;
    top: -140px;
    width: 120%;
    height: 300px;
    background-color: #000;
    z-index: 0;
    border-radius: 50%;

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

`
export const ImgPokemon = styled.img`
    /* flex-basis: 20%; */
    display: block;
    height: 33%;
    object-fit: cover;
    z-index: 1;
`

export const Title = styled.p`
    font-size: 1.5rem;
    font-family: 'Kdam Thmor Pro';
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 0rem;
    text-transform: uppercase;
    z-index: 1;
`

export const ContainerType = styled.div`
    margin-bottom: 1rem;

    p {
        padding: 1rem;
        font-size: 1.1rem;
        font-weight: bold;
        border-radius: 10rem;
        color: #fff;
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
    }
`

export const ContainerAbilities = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgba(0, 0, 0, 0.74);

    h2 {
        font-size: 1.4rem;
    }

    div {
        margin-top: 1rem;
        display: flex;
        column-gap: 1rem;
        
        p {
            padding: .5rem;
            border-radius: .4rem;
            color: #fff;
            background: #f12711; 
            background: -webkit-linear-gradient(to right, #f5af19, #f12711); 
            background: linear-gradient(to right, #f5af19, #f12711);
        }
    }
`
