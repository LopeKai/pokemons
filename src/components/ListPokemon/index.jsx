import { useEffect, useState } from 'react'

import { Pokemon } from "../Pokemon"

import { Container, Ul, ButtonNext } from './styles'

export function ListPokemon() {
    const [allPokemon, setAllPokemon] = useState([])
    const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limite=20")

    async function getPokemon() {
        const res = await fetch(loadMore)
        const data = await res.json()

        setLoadMore(data.next)

        const createPokemon = (result) => {
            result.forEach(async (pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()

                setAllPokemon((currentList)=> [...currentList, data])
            })
        }

        createPokemon(data.results)
    }
    console.log(allPokemon)
    useEffect(() => {
        getPokemon()
    }, [])

    return (
        <Container >
            <Ul>
                {
                    allPokemon.map((item, index) => {
                        return (
                            <Pokemon 
                                key={index} 
                                title={`Pokemon ${++index}`} 
                                name={item.name} 
                                image={item.sprites.other.dream_world.front_default}
                                type={item.types[0].type.name}
                                hp={item.base_experience}
                            />
                        )
                    })
                }
                {/* <Pokemon title="Pokemon 3" name="Raichu" /> */}
            </Ul>
            <ButtonNext onClick={() => getPokemon()}>Next Pokemons</ButtonNext>
        </Container >
    )
}