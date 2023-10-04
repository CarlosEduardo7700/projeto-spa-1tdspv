import { Link, useLocation } from "react-router-dom"
import "./Cabecalho.scss"

export default function Cabecalho() {

    const rota = useLocation()

    return (
        <>
            <header className="cabecalho">
                <ul>
                    <li>
                        <Link to="/" className={rota.pathname == "/" ? "active" : ""}>Home</Link>
                    </li>
                    <li>
                        <Link to="/produtos" className={rota.pathname == "/produtos" ? "active" : ""}>Produtos</Link>
                    </li>
                </ul>
            </header>
        </>
    )
}