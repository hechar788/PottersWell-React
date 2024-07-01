import "../styles/hero.css"
export function Hero(props){
    return (
        <div className="hero--parent-wrapper">
            <div className="hero--text-wrapper">
                <h1 className="hero--main-header">Gael Abrahams,</h1>
                <h3 className="hero--sub-header">The Potters Well estd 2014, is a well-known ceramics pottery studio located in Ōhinehou (Lyttelton). Gael creates complex, carefully constructed glazed surfaces on superbly finished forms.</h3>
                <h3 className="hero--sub-header">Take a look around to see some of my pieces, check out the store to see available products or enquire further regarding custom orders.</h3>
                <h3 className="hero--sub-header">The Potters Well is a teaching studio, many potters come here to perfect the art of throwing.</h3>
                <button className="hero--buttons">See my collections</button>
            </div>
            <div className="hero--img-wrapper">
                <img className="hero--img" src={require(`../images/${props.heroImg}`)}/>
            </div>
        </div>
    )
}