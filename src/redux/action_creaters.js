import * as ActionTypes from './action_type';
import {  baseUrl } from '../shared/baseUrl';



export const signupUser = (formData) => dispatch => {

    dispatch(doLoading_register(true));
    return fetch(baseUrl+"/users/signup", {
        method: "POST",
        body: formData,
        headers: { "mimeType": "multipart/form-data" }

    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            }
        )
        .then(response => response.json())
        .then(response => {
            dispatch(registerd(response));
          

        })
        .catch(error => dispatch(signupFailed(error.message)));
}

export const doLoading_register = () => ({
    type: ActionTypes.DO_REGISTER
});

export const signupFailed = (errmess) => ({
    type: ActionTypes.REGISTER_FAILED,
    payload: errmess
})

export const registerd = (response) => ({
    type: ActionTypes.REGISTERED,
    payload: response
})

export const loginUser = (user, pass,history) => (dispatch) => {


    dispatch(doLoading(true));
    return fetch(baseUrl +"/users/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: user,
            password: pass,
        })
        ,

    })
        .then(response => {
           
            if (response) {
                
                return response;
            }
            else {
                
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
              
                throw error;
            }
        },
            error => {
           
                throw error;
            })
        .then(response => { return response.json()})
        .then(response => {

           if(response.success===false){
            dispatch(loginFailed(response.errstatus))
            return;
           }
            dispatch(loginUserx(response));

            window.localStorage.setItem('user', JSON.stringify(response));
            history.push("/");

        })
        .catch(error =>{ dispatch(loginFailed(error.message))});
}

export const loginUserx = (user) => ({
    type: ActionTypes.LOGIN_USER,
    payload: user
});
export const loginFailed = (errmess) => ({
    type: ActionTypes.LOGIN_USER_FAILED,
    payload: errmess
});

export const doLoading = () => ({
    type: ActionTypes.DO_LOADING_LOGIN
});


export const fetchPosts = () => (dispatch) => {


   
    return fetch(baseUrl +"/users/home", {
        method: "GET",

    })
        .then(response => {
           
            if (response) {
                
                return response;
            }
            else {
                
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
              
                throw error;
            }
        },
            error => {
           
                throw error;
            })
        .then(response => { return response.json()})
        .then(response => {

            dispatch(postAdded(response));

        })
        .catch(error =>{ dispatch(postFailed(error.message))});
}


export const postAdded = (user) => ({
    type: ActionTypes.POST_ADDED,
    payload: user
});
export const postFailed = (errmess) => ({
    type: ActionTypes.POST_ADDED_FAILED,
    payload: errmess
});




export const createPost = (title,text) => (dispatch) => {

    const userToken = JSON.parse(window.localStorage.getItem("user"));
    dispatch(doLoading(true));
    return fetch(baseUrl +"/users/add-post", {
        method: "POST",
        headers: { 'Content-Type': 'application/json','Authorization':`Bearer ${userToken.token}` },
        body: JSON.stringify({
            title: title,
            text: text,
        })
        ,
    })
        .then(response => {
           
            if (response.ok) {
                
                return response;
            }
            else {
                
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
              
                throw error;
            }
        },
            error => {
           
                throw error;
            })
        .then(response => { return response.json()})
        .then(response => {

            dispatch(createPosts(response));

        })
        .catch(error =>{ dispatch(postCreateFailed(error.message))});
}


export const createPosts = (user) => ({
    type: ActionTypes.POST_ADDED_SUCCESSFULLY,
    payload: user
});
export const postCreateFailed = (errmess) => ({
    type: ActionTypes.POST_ADD_FAILED,
    payload: errmess
});