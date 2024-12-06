import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { RootReducer } from '../store'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
}

const ProdutosComponent = ({ produtos }: Props) => {
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  const produtoEstaNosFavoritos2 = useSelector(
    (state: RootReducer) => state.favoritos.itens
  )

  const produtoEstaNosFavoritos3 = produtoEstaNosFavoritos2.reduce(() => {
    produtoEstaNosFavoritos2.find((p) => p.id === produto.id)
  }, 0)

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            favoritar={favoritar}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
