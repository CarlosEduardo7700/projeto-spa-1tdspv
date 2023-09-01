export default function Cabecalho() {

    return (
        <>
            <header>
                <h1>Vite + React / Coded By rm552164</h1>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/produtos">Produtos</Link>
                </li>
                <li>
                    <Link to="/editar/produtos/1">Produto-1</Link>
                </li>
                </ul>
            </header>
        </>
    )
}