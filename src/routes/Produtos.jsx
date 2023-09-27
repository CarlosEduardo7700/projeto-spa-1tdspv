import { Link } from "react-router-dom";
import { AiOutlineDelete as Excluir, AiOutlineEdit as Editar } from 'react-icons/ai'
import classes from "./Produtos.module.css";
import { useEffect, useState } from "react";
import ModalInserir from "../components/ModalInserir";

export default function Produtos() {
  document.title = "LISTA DE PRODUTOS"

  const [listaProdutoLocal, setListaProdutoLocal] = useState([{}])

  useEffect(() => {
    fetch('http://localhost:5000/produtos', {

      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json())
    .then ((data)=>{
        setListaProdutoLocal(data)
    })
    .catch((err) => console.log(err))

  }, [])

  const [open, setOpen] = useState(false)

  return (
    <div>
      <h1>Lista de Produtos</h1>
      
      {open ? <ModalInserir open={open} setOpen={setOpen}/> : ""}

      <button onClick={() => setOpen(true)}>OPEN-MODAL</button>


      <div>
        <table className={classes.tableStyle}>
          <thead>
            <tr className={classes.tableStyle.tableHeaderStyle}>
              <th className={classes.tableHeaderStyle}>ID</th>
              <th className={classes.tableHeaderStyle}>NOME</th>
              <th className={classes.tableHeaderStyle}>DESCRIÇÃO</th>
              <th className={classes.tableHeaderStyle}>PREÇO</th>
              <th className={classes.tableHeaderStyle}>Imagem</th>
              <th className={classes.tableHeaderStyle}>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
              {listaProdutoLocal.map( (produto, index) => (
                <tr key={index} className={classes.tableLineStyle}>
                  <td className={classes.tableDataStyle}>{produto.id}</td>
                  <td className={classes.tableDataStyle}>{produto.nome}</td>
                  <td className={classes.tableDataStyle}>{produto.desc}</td>
                  <td className={classes.tableDataStyle}>{produto.preco}</td>
                  <td className={classes.tableDataStyle}><img src={produto.img} alt={produto.desc}/></td>
                  <td className={classes.tableDataStyle}>
                    <Link to={`/editar/produtos/${produto.id}`}><Editar/></Link> | 
                    <Link to={`/excluir/produtos/${produto.id}`}><Excluir/></Link>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className={classes.tableDataStyle}>Total de Produtos: {listaProdutoLocal.length}</td>
              </tr>
            </tfoot>
          </table>
        </div>
    </div>
  );
}

// useEffect(()=>{
//   console.log("Use-Effect que será renderizado apenas uma vez!")

//   setExemplo(ListaProdutos)

// }, [])

// useEffect(()=>{
//   console.log("Use-Effect que será renderizado o objeto ou elemento ou componente que está no arry de dependinecias sofrer atualização!")
// }, [count])

// const [exemplo, setExemplo] = useState([{}])

// const [count, setCount] = useState(0)

// useEffect(()=>{
//   console.log("Use-Effect que será sempre renderizado!")
// })
