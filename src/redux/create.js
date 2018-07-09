import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './modules/reducers';
import { AsyncStorage } from 'react-native'


const middleware = [];

export default (apiClient) => {
    middleware.push(thunk.withExtraArgument(apiClient));
    const store = createStore(
        reducer,
        applyMiddleware(thunk),
    );
    return store;
};