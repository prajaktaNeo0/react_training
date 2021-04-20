var demo = function(state , action){
    switch(action.type){
        case "LOGIN":{
            console.log("Here we have to write login for login")
            state = {...state}
            state["isloggedin"] = true
            state["user"] = action.payload
            return state
        }

        default : return state
    }
}

export default demo