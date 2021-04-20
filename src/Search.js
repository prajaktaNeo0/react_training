import Cake from './Cake';
import axios from "axios"
import { useEffect , useState } from "react";
import queryString from "query-string"

function Search(props){
    let [cakes,setCakes] = useState([])
    let [searchtext , setSearchtext] = useState([])
    
    const parsed = queryString.parse(props.location.search)
    console.log("parsed",parsed);
    

    let getKeyword =(event)=>{
        setSearchtext(event.target.value)
    }

    useEffect(()=>{
        let seachcakesapi = "https://apibyashu.herokuapp.com/api/searchcakes?q="+parsed.searchtext;

        axios({
            url:seachcakesapi,
            method:"get",
            
        }).then((response)=>{
             console.log("response from api",response.data)
             setCakes(response.data.data)
              
        },(error)=>{
             console.log("Error from api",error)
        })
    },[props.location.search])
    return(
        <div className="container">
           {/* <div className="row"style={{padding:"2rem"}}>
                <div className="col-mg-6" >
                    <input onChange={getKeyword} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>   
                </div>
                <div className="col-mg-6" style={{marginLeft:"2rem"}}>
                    <Link to={"/search?cake="+searchtext}><button className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button></Link>
                </div>
             </div> */}
             <div className="row">
            {cakes?.length > 0 ? cakes.map((each,index)=>{
                return <Cake cakedata={each} key={index} />
            }) : <div className="alert alert-danger">No results found</div>}

            </div>  
        </div>

    )
}

export default Search