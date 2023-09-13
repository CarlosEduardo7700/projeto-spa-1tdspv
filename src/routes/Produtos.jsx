import { ListaProdutos } from "../components/listaProdutos";
import { Link } from "react-router-dom";
import classes from "./Produtos.module.css";
import { useEffect, useState } from "react";

export default function Produtos() {
  document.title = "LISTA DE PRODUTOS";

  useEffect(()=>{
    console.log("Use-Effect que será sempre renderizado!")
  });

  const [exemplo, setExemplo] = useState(0)

  return (
    <main>
      <h1>Lista de Produtos</h1>

    <div>
        <button onClick={() => setExemplo(exemplo + 1)}>CLICK - {exemplo}</button>
    </div>

      <div>
        <table className={classes.tableStyle}>
          <thead>
            <tr className={classes.tableStyle.tableHeaderStyle}>
              <th className={classes.tableStyle.tableHeaderStyle}>ID</th>
              <th className={classes.tableStyle.tableHeaderStyle}>NOME</th>
              <th className={classes.tableStyle.tableHeaderStyle}>DESCRIÇÃO</th>
              <th className={classes.tableStyle.tableHeaderStyle}>PREÇO</th>
              <th className={classes.tableStyle.tableHeaderStyle}>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {ListaProdutos.map((produto, index) => {
              <tr key={index} className={classes.tableLineStyle}>
                <td className={classes.tableStyle.tableDataStyle}>{produto.id}</td>
                <td className={classes.tableStyle.tableDataStyle}>{produto.nome}</td>
                <td className={classes.tableStyle.tableDataStyle}>{produto.desc}</td>
                <td className={classes.tableStyle.tableDataStyle}>{produto.preco}</td>
                <td>
                  <Link to={`/editar/produto/${produto.id}`}>Editar</Link> |{" "}
                  <Link to={`/excluir/produtos/${produto.id}`}>Excluir</Link>
                </td>
              </tr>;
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
  );
}
