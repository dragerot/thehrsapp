import {LOGIN_IN,LOGIN_OUT,LOGIN_STATE} from "./ActionTypes";

export default function loginReducer(state={isLoggedIn : false}, action){
    switch (action.type) {
        case LOGIN_IN :
            console.log("reducer LOGIN_IN Login action....")
            return Object.assign({},state,{isLoggedIn : true});

        case LOGIN_OUT :
            console.log("reducer LOGIN_OUT Logout action....")
            return Object.assign({},state,{isLoggedIn : false});

        case LOGIN_STATE :
            console.log("reducer LOGIN_STATE ....")
            return Object.assign({},state,{isLoggedIn : !action.isLoggedIn});

        default:
            return state;
    }
}