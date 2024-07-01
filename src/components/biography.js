import "../styles/biography.css"
export function Biography(){
return (
<div className="biography--main--wrapper">
        <div className="biography--first--section">
            <div className="biography--text--wrapper">
                <h1 className="biography--main--header">Biography</h1>
                <h3>blah blah blah</h3>
                <h3 className="hero--sub-header">Gael has competed in and set up many exhibitions/gallery events and won many awards including her recent Canterbury Potters Association 50th Annual Throwing Award</h3>
                <h3>blah blah blah</h3>
                <h3>blah blah blah</h3>
            </div>
            <div className="biography--picture--wrapper">
                <img className="biography--img" src={require(`../images/Biography/canvas pfp.png`)}></img>
            </div>
        </div>
        <div className="biography--second--section">
            <div className="biography--picture--wrapper">
                <img className="biography--img" src={require(`../images/Biography/canvas pfp 2.png`)}></img>
            </div>
            <div className="biography--text--wrapper--two">
                <h3>blah blah blah</h3>
                <h3>blah blah blah</h3>
                <h3 className="hero--sub-header">Gael has competed in and set up many exhibitions/gallery events and won many awards including her recent Canterbury Potters Association 50th Annual Throwing Award</h3>
                <h3>blah blah blah</h3>
            </div>
        </div>
    </div>
)}