
import { Li, ImgPokemon, Title, BgColor, ContainerType , ContainerAbilities } from "./styles"

export function Pokemon({ title, name, image, type, hp, ability}) {

    return (
        <Li>
            <BgColor type={type}></BgColor>
            <header>
                <strong>{title}</strong>
                <span> Xp {hp}</span>
            </header>
            <ImgPokemon src={image} alt="" />
            <Title>{name}</Title>
            <ContainerType type={type}>
                <p>{type}</p>
            </ContainerType>
            <ContainerAbilities>
                <h2>Abilities</h2>
                <div>
                    {
                        ability.map((ability, index) => {
                            return (
                                <p key={index}>{ability.ability.name}</p>
                            )
                        })
                    }
                </div>
            </ContainerAbilities>
        </Li>
    )
}