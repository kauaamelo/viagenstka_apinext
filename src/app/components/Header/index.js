import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <navbar className="navbar">

            <div className="logo">
            <img src="/ViagensTKALogo.png" />
            </div>

            <div className="nav-list">
            <ul>
                <li>
                    <Link className="nav-item" href="/PaginaHome">Home</Link>
                </li>
                <li>
                    <Link className="nav-item" href="/">Gestão</Link>
                </li>
                <li>
                    <Link className="nav-item" href="/PaginaCliente">Lista de Clientes</Link>
                </li>
            </ul>
            </div>

            </navbar>
        </header>
    )
}