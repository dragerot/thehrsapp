import {LOGIN_IN,LOGIN_OUT,LOGIN_STATE} from "./ActionTypes";

/*
 * action creators
 */
export function loginAction(){
    console.log("loginAction");
    return {type: LOGIN_IN,isLoggedIn : true  };
}

export function logoutAction(){
    console.log("logoutAction");
    return {type: LOGIN_OUT, isLoggedIn : false};
}

export function changeLoginState(currentStateOfLogin){
    console.log("logoutAction");
    return {type: LOGIN_STATE, isLoggedIn : currentStateOfLogin };
}


// export function loadLoginDispatch(){
//     return function(dispatch){
//         dispatch(login());
//     }
// }