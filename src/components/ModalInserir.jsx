import styles from "./ModalInserir.module.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ModalInserir(props) {

    const navigate = useNavigate()

    const [listaLocal, setListaLocal] = useState([{}])

    let novoId

    useEffect(() => {
        fetch("http://localhost:5000/produtos", {
            method: "GET",
            headers:{
                "Content-Type" : "application/json",
            }
        })
        .then((response)=> response.json())
        .then((data) => {
            setListaLocal(data)
        })
        .catch (error => console.log(error)) 

    }, [])

    novoId = (listaLocal[listaLocal.length - 1].id + 1)

    const [produto, setProduto] = useState({
        id: novoId,
        nome: "",
        desc: "",
        preco: "",
        img: "",
    })

    if (props.open){

        const handleChange = (event) => {
            const {name, value} = event.target
            setProduto({...produto, [name]:value})
        }

        const handleSubmit = (e) => {
            e.preventDefault()
    
            fetch("http://localhost:5000/produtos", {
                method: "POST",
                body: JSON.stringify(produto),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((response) => response.json())
            .then((data) => (console.log(data)))
            .catch(error => console.log(error))
    
            navigate("/produtos")
        }

        return (
        
            <div className={styles.container}>

                <button onClick={() => props.setOpen(false)}>CLOSE-MODAL</button>
                
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Cadastrar Produto</legend>
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
                            <label htmlFor="idImg">Imagem</label>
                            <input 
                                type="url" 
                                name="img" 
                                id="idImg" 
                                onChange={handleChange} 
                                value={produto.img}
                            />
                        </div>
                        <div>
                            <button>Cadastrar</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}
