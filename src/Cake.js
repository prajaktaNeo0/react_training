import { Link } from 'react-router-dom';

function Cake(props){
    return(
        <div>
            <div className="card" style={{width: "18rem"}}>
                <Link to={'/cake/'+props.cakedata.cakeid}><img src={props.cakedata.image} style={{height:"200px"}} className="card-img-top" alt="..."/></Link>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>

    )
}

export default Cake