import './Colorcard.css'

function  Colorcard(props){
    return(
        <div className="Colorcard">
            <div className='bgcolor' style={{background:props.colorcode}}>
            </div>
            <div className="colortext">
            <h2>{props.colorcode}</h2>
            <span style={{color:props.colorcode}}>{props.name}</span>
            </div>
            
        </div>
    )
}

export default  Colorcard;