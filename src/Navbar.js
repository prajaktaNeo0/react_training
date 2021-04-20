import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

function Navbar(props){
    let search = function(event)
    {
        event.preventDefault();
        let url = "/search?searchtext="+document.getElementById('searchtext').value;
        console.log("props=",url);
        props.history.push(url)
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/home"><a className="navbar-brand" href="#">The Cake shop</a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <Link to="/"> <a className="nav-link" href="#">  Hello {props.user}<span className="sr-only">(current)</span></a></Link>
                </li>
                <li className="nav-item">
                <Link to="/home"> <a className="nav-link" href="#">Home</a></Link>
                </li>
                
                <li className="nav-item">
                <Link to="/signup"> <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Register</a></Link>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input id="searchtext" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>   
                    <button className="btn btn-outline-success my-2 my-sm-0" onClick={search} type="button">Search</button>
                {!props.loginStatus && <Link to="/login"><button className="btn btn-primary">Login</button></Link>}
                {props.loginStatus && <button className="btn btn-danger">Logout</button>}
                </form>
            </div>
            </nav>

    )
}

export default withRouter(Navbar)