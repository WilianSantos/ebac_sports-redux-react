import { useSelector } from 'react-redux'

import { Produto as ProdutoType } from '../App'

import Produto from '../components/Produto'

import { RootReducer } from '../store'

import * as S from './styles'

import { useGetProdutosQuery } from '../services/api'

const ProdutosComponent = () => {
  const favoritos = useSelector(
    (state: RootReducer) => state.favorito.favoritos
  )

  const { data: produtos } = useGetProdutosQuery()

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
