import {ImDatabase} from 'react-icons/im'
import {BsTools} from 'react-icons/bs'
import {MdGames} from 'react-icons/md'
import {FaCommentDots} from 'react-icons/fa'
import {BiSearchAlt} from 'react-icons/bi'

import { Container, ContainerInput, ContainerLinks } from "./styles"

import logo from '../../images/logo.webp'

export function Header({ title }) {
    return (
        <Container>
            <img src={logo} alt="" />

            <ContainerLinks>
                <a href="#">
                    <ImDatabase/>
                    Dados Pokémon
                </a>
                <a href="#">
                    <BsTools/>
                    Mecânica do jogo
                </a>
                <a href="#">
                    <MdGames/>
                    Jogos de Pokémon
                </a>
                <a href="#">
                    <FaCommentDots />
                    Comunidade
                </a>
            </ContainerLinks>
            
            <ContainerInput>
                <input type="text" placeholder="Procurar"/>
                <BiSearchAlt />
            </ContainerInput>
        </Container >
    )
}