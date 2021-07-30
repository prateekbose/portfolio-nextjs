import { useState } from 'react'

export default function NavBar(){

    const [menuOpen, setMenuOpen] = useState(false)

    const openMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className={(menuOpen)?'nav-active':''}>
            <h1>Prateek Bose</h1>
            <div className={`nav-links ${(!menuOpen)?'nav-hide':''}`}>
                <a className="nav-link">Projects</a>
                <a className="nav-link">Blogs</a>
                <a className="nav-link">About</a>
            </div>
            <div className={`burger ${(menuOpen)?'burger-active':''}`} onClick={() => openMenu()}>
                <div className="burger-line line-1"></div>
                <div className="burger-line line-2"></div>
            </div>
        </nav>
    )
}