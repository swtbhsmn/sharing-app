import {createStore,  applyMiddleware ,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {login_user} from './login_reducer';
import {fetch_posts} from './post_fetch';
import {create_posts} from './post_add';
import {signup_user} from './signup_redux';
const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
           login_user:login_user,
           fetch_posts:fetch_posts,
           create_posts:create_posts,
           signup_user:signup_user
        }),
       
        applyMiddleware(thunk,logger)
    );

    return store;
}

export default ConfigureStore;