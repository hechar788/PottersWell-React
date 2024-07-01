import "../styles/nav.css"
import { Link } from "react-router-dom"

export function Nav(props){
    return (
        <>
        <nav className="navbar">
            <Link to="/">
                <img className="navbar--img" src={require(`../images/${props.navImg}`)}/>
            </Link>
            <div className="navbar--button--wrapper">
        <button className="navbar--button">Store</button>
        <Link to="/about">
            <button className="navbar--button">About</button>
        </Link>
        <button className="navbar--button">Contact</button>
        </div>
        </nav>
        
        </>
    )
}