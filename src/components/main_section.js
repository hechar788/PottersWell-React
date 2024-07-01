import "../styles/main_section.css"

export function MainSection (){
    return (
        <div className="mainsection--wrapper">
            <div className="mainsection--main">
                <img className="mainsection--img" src={require(`../images/mainsection/second-hero-img.png`)} />
                <div className="mainsection--text--wrapper">
                    <h1>lalalala</h1>
                    <h3>lalalala</h3>
                    <h3>lalalala</h3>
                </div>
            </div>
            <div className="mainsection--underimg--wrapper">
                <img className="mainsection--underimg" src={require(`../images/mainsection/second-hero-img.png`)} />
                <img className="mainsection--underimg" src={require(`../images/mainsection/second-hero-subimg.png`)} />
            </div>
        </div>
    )
}