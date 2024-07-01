import { Link } from "react-router-dom"

function Card(props){
    return ( 
    <div className="display--card--wrapper">
        <img className="display--card--img" src={require(`../images/Card displays/${props.link}`)}></img>
        <div className="display--card--title--wrapper">
                <h3 className="display--card--title">{props.title}</h3>
        </div>
    </div> 
    )
}

export function Display(props){
    let cards = props.data.map(x=>{
        return <Card link={x.link} title={x.title}/>
    })
    return( 
    <>
    <div className="display--main--wrapper">
        <Link to="/about" className="display--title"><h3>{`Collections`}</h3></Link>
        <div className="display--carousel--wrapper">
            {cards}
        </div>
    </div>
    </>
    )
}