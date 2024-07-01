import "../styles/nav_two.css"
import { Link } from "react-router-dom"

export function NavTwo(){
    return (
    <>
    <div className="second--navbar--button--wrapper">
                <div className="second--navbar--buttons">
                <button className="navbar--button">Store</button>
                <Link to="/about">
                    <button className="navbar--button">About</button>
                </Link>
                <button className="navbar--button">Contact</button>
                </div>
        </div>
        <nav className="second--navbar">
            <Link to="/">
                <img className="second--navbar--img" src={require(`../images/navbar-logo.png`)}/>
            </Link>
        </nav>
        
    </>
    )
}