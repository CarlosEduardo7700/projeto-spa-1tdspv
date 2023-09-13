import { useParams } from "react-router-dom"
import { ListaProdutos } from "../components/listaProdutos";
import { useState } from "react";

export default function EditarProduto(){

    const {id} = useParams();


    document.title = "EDITAR PRODUTOS " + id

    const produtoRetornadoFilter = ListaProdutos.filter(produto => produto.id == id)

    const [produto, setProduto] = useState("NOME");


    return(
        <div>
            <h1>Editando o produto</h1>

            <p>Objeto selecionado : {produtoRetornadoFilter[0].nome}</p>
            <button onClick={()=> setProduto("Algo novo")}>MUDAR O STATE</button>
            <div>
                <form>
                    <fieldset>
                        <legend>Produto selecionado</legend>
                        <input type="hidden" name="id" defaultValue={produtoRetornadoFilter[0].id}/>
                        <div>
                            <label htmlFor="idProd">Nome do Produto</label>
                            <input type="text" name="nome" id="idProd" defaultValue={produtoRetornadoFilter[0].nome}/>
                        </div>
                        <div>
                            <label htmlFor="idDesc">Descrição</label>
                            <input type="text" name="desc" id="idDesc" defaultValue={produtoRetornadoFilter[0].desc}/>
                        </div>
                        <div>
                            <label htmlFor="idPreco">Preço</label>
                            <input type="text" name="preco" id="idPreco" defaultValue={produtoRetornadoFilter[0].preco}/>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}