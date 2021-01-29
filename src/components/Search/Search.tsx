import React from 'react'

import axios from 'axios'
import { dataCep } from '../../type/dataCep'

const Search = () => {
    const [cep, setCep] = React.useState<String>('')
    const [dadosCep, setDadosCep] = React.useState<dataCep>()

    const search = () =>{
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(resposta => setDadosCep(resposta.data))
    }

    return (
        <div>
            <input type="text" placeholder="Digite seu Cep" onChange={(event) => setCep(event.target.value)}/> <br/><br/>
            <button onClick={search}>Buscar Cep</button>

            {
            dadosCep && 
            <>
                <p><strong>Cep: </strong>{dadosCep?.cep}</p>
                <p><strong>Cidade: </strong>{dadosCep?.localidade} - {dadosCep?.uf}</p>
                <p><strong>Rua: </strong>{dadosCep.logradouro}</p>
                <p><strong>Bairro: </strong>{dadosCep?.bairro}</p>
                {dadosCep.complemento && <p><strong>Complemento:</strong>{dadosCep?.complemento}</p>}
                
            </>
            } 
        </div>
    );
}

export default Search
