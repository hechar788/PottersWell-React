export function Header(props){
    return (
        <>
        <img className="header--img" src={require(`../images/${props.headerImg}`)}></img>
        <img className="header--logo" src={require(`../images/${props.headerLogo}`)}></img>
        </>
    )
}