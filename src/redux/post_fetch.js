import * as ActionTypes from './action_type';

export const fetch_posts = (state = { isLoading:false,errMess: null,userPosts:[]}, action) => {
    switch (action.type) {
  
      case ActionTypes.POST_ADDED_FAILED:
        return {...state,isLoading:false, errMess: action.payload};
      case ActionTypes.FETCH_POST:
          return { ...state,isLoading:true,errMess:null};
      case ActionTypes.POST_ADDED:
          return {...state,isLoading:false,errMess:null,userPosts:action.payload};
     
      default:
        return state;
    }
  };