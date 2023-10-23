import React from 'react'
import FormAddEscola from '../../components/pagina_admin/ThirdColumn/Add-Escola/FormAddEscola'
import TitleTopo from '../../components/pagina_admin/ThirdColumn/TitleTopo'
import Button from '../../components/Button'
import DescricaoSobInput from '../../components/form/DescricaoSobInput'
import Input from '../../components/form/Input'

const AddEscola = () => {
  return (
    <FormAddEscola>
       <div>
            <div>
              <TitleTopo>Adicionar Escola</TitleTopo>
            </div>
            <DescricaoSobInput>Nome da Instituição</DescricaoSobInput>
            <Input />
            <DescricaoSobInput>Email</DescricaoSobInput>
            <Input />
            <DescricaoSobInput>CNPJ</DescricaoSobInput>
            <Input />
            <DescricaoSobInput>Senha</DescricaoSobInput>
            <Input />
        </div>
        <div>
            <Button>Adicionar</Button>
        </div>
    </FormAddEscola>
  )
}

export default AddEscola
