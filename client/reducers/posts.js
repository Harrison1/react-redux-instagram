// reducer takes the action (info of what happened) and a copy of the current state
function posts(state=[], action) {
	console.log('the post will change');
	console.log(state, action);
	return state;
}

export default posts;