import Cake from './Cake';
import axios from "axios"
import Carousel from './Carousel'

import { useEffect , useState } from "react";

/*import cakes from './data.js'
var obj ={
    name:"chocolate",
    image:'img4.jpg'
}*/
function Home(){
    let [cakes,setCakes] = useState([])
    let allcakesapi = "https://apibyashu.herokuapp.com/api/allcakes"
    useEffect(()=>{
        axios({
            url:allcakesapi,
            method:"get",
            
        }).then((response)=>{
             console.log("response from api",response.data)
             setCakes(response.data.data)
        },(error)=>{
             console.log("Error from api",error)
        })
    },[])
    return(
        <div>
        <Carousel></Carousel>
        <div className="row">
            {cakes?.length > 0 && cakes.map((each,index)=>{
                return <Cake cakedata={each} key={index} />
            })
            }
        </div>
        </div>
    )
}

export default Home