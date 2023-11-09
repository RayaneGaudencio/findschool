import styled from "styled-components";
import ImgPerfilMockado from '../../../img/perfil.svg'

const DadosUsuario = styled.div`
    width: 95%;
    height: 263px;
    background-color: #95FA159E;
    margin: 20px auto 30px;
    display: flex;
    align-items: center;
`

const NomeUsuario = styled.h1`
    font-size: 26px;
    color: #000;
`
const DivDadosUsuario = styled.div`
    display: flex;
    align-items: center;
    margin-left: 150px;
`

const DivDadosUsuarioColuna1 = styled.div`

`

const DivDadosUsuarioColuna2 = styled.div`

`

const Contatos = styled.p`
    font-size: 18px;
    color: #150096;
    font-weight: bold;
    margin-top: 15px;
`

const TipoContato = styled.p`
    font-size: 16px;
    color: #000;
    font-weight: bold;
`

const DivImgPerfil = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #D9D9D9;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 90px;
`

const ImgPerfil = styled.img`
    width: 130px;
    height: 130px;
`

const Perfil = () => {
    return (
        <DadosUsuario>

            <DivImgPerfil>
                <ImgPerfil src={ImgPerfilMockado}></ImgPerfil>
            </DivImgPerfil>
            
            <DivDadosUsuario>

                <DivDadosUsuarioColuna1>
                    <NomeUsuario>Hernandes Silva</NomeUsuario>
                    <Contatos>contato:</Contatos>
                    <TipoContato>E-mail</TipoContato>
                    <TipoContato>hernandes.silva@gmail.com</TipoContato>
                </DivDadosUsuarioColuna1>

                <DivDadosUsuarioColuna2>
                    <TipoContato>Número</TipoContato>
                    <TipoContato>(81) 9 4444-3333</TipoContato>
                </DivDadosUsuarioColuna2>

            </DivDadosUsuario>

        </DadosUsuario>
    )
}

export default Perfil