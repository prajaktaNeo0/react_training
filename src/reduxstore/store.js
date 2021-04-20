import {createStore} from "redux"
import demo from "./reducers"

var store = createStore(demo)

store.dispatch({
    type:"login"
})

console.log(".......",store.getState())

store.dispatch({
    type:"LOGIN",
    payload:{email:"pawarprajakta336@gmail.com",name:"Prajakta Pawar"}
})
//actions are plain js objects with a key known as type
console.log(".......",store.getState())

export default store