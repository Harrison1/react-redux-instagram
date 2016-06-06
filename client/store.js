import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

//create object for defualt data
const defaultState = {
	posts,
	comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

// hot reload reducer
if(module.hot) {
	module.hot.accept('./reducers/',() => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	})
}

export default store;