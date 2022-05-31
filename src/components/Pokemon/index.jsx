
import { Li, ImgPokemon, Title } from "./styles"

export function Pokemon({ title, name, image, type, hp }) {
    return (
        <Li type={type}>
            <header>
                <strong>{name}</strong>
                <span> Hp {hp}</span>
            </header>
            <ImgPokemon src={image} alt="" />
            <Title>{name}</Title>
        </Li>
    )
}