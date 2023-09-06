import { ListaProdutos } from "../components/listaProdutos"
import {Link} from "react-router-dom"

export default function Produtos(){

    document.title = "LISTA DE PRODUTOS"

    return (
        <main>
            <h1>Lista de Produtos</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>DESCRIÇÃO</th>
                            <th>PREÇO</th>
                            <th>Editar/Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListaProdutos.map((produto, index) => {
                            <tr key={index}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.desc}</td>
                                <td>{produto.preco}</td>
                                <td><Link to={`/editar/produto/${produto.id}`}>Editar</Link> | <Link to={`/excluir/produtos/${produto.id}`}>Excluir</Link></td>
                            </tr>
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4">Total de Produtos: {ListaProdutos.length}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </main>
    )
}