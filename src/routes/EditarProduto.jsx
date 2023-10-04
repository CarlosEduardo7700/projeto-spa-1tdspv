import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export default function EditarProduto(){
    const { id } = useParams()
    const navigate = useNavigate()

    document.title = "EDITAR PRODUTOS " + id
    
    const [produto, setProduto] = useState({
        id: "",
        nome: "",
        desc: "",
        preco: "",
        img: ""
    })

    useEffect( async () => {
        await fetch(`http://localhost:5000/produtos/${id}`, {
            method: "GET",
            headers:{
                "Content-Type" : "application/json",
            }
        })
        .then((response)=> response.json())
        .then((data) => {
            setProduto({
                id: data.id,
                nome: data.nome,
                desc: data.desc,
                preco: data.preco,
                img: data.img
            })
        })
        .catch (error => console.log(error)) 

    }, [id])

    const handleChange = (event) => {
        const {name, value} = event.target
        setProduto({...produto, [name]:value})
    }

    const handleSubit = async (event) => {
        event.preventDefault()

        await fetch(`http://localhost:5000/produtos/${id}`, {
            method:"PUT",
            body: JSON.stringify(produto),
            headers: {
                "Content-Type" : "application/json",
            }
        })
        .catch (error => console.log(error))  

        navigate("/produtos")
    }

    return(
        <div>
            <h1>Editando o produto</h1>

            <div>
                <form onSubmit={handleSubit}>
                    <fieldset>
                        <legend>Produto Selecionado</legend>
                        <input type="hidden" name="id" value={produto.id}/>
                        <div>
                            <label htmlFor="idProd">Nome do Produto</label>
                            <input 
                                type="text" 
                                name="nome" 
                                id="idProd" 
                                onChange={handleChange} 
                                value={produto.nome}
                            />
                        </div>
                        <div>
                            <label htmlFor="idDesc">Descrição</label>
                            <input 
                                type="text" 
                                name="desc" 
                                id="idDesc" 
                                onChange={handleChange} 
                                value={produto.desc}
                            />
                        </div>
                        <div>
                            <label htmlFor="idPreco">Preço</label>
                            <input 
                                type="text" 
                                name="preco" 
                                id="idPreco" 
                                onChange={handleChange} 
                                value={produto.preco}
                            />
                        </div>
                        <div>
                            <button>EDITAR</button>
                        </div>
                    </fieldset>
                </form>
            </div>

            <div>
                <p>Nome: {produto.nome}</p>
                <p>Descrição: {produto.desc}</p>
                <p>Preço: {produto.preco}</p>
            </div>

        </div>
    )
}