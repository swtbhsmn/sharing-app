import * as ActionTypes from './action_type';

export const login_user = (state = { isLoading:false,errMess: null,userInfo:[]}, action) => {
    switch (action.type) {
  
      case ActionTypes.LOGIN_USER_FAILED:
        return {...state,isLoading:false, errMess: action.payload};
  
      case ActionTypes.LOGIN_USER:
   
          return { ...state,isLoading:false,errMess:null,userInfo: action.payload};
      case ActionTypes.DO_LOADING_LOGIN:
          return {...state,isLoading:true,errMess:null};
     
      default:
        return state;
    }
  };