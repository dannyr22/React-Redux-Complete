const initState = {
    posts: [
        {id: '1', title: 'Bing in the Woods', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tortor odio, auctor in tincidunt finibus, consequat at sem. Curabitur vulputate turpis ultrices lacus rhoncus varius.'},
        {id: '2', title: 'Florence turned to smoke', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tortor odio, auctor in tincidunt finibus, consequat at sem. Curabitur vulputate turpis ultrices lacus rhoncus varius.'},
        {id: '3', title: 'Night before Dawn', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tortor odio, auctor in tincidunt finibus, consequat at sem. Curabitur vulputate turpis ultrices lacus rhoncus varius.'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE__POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
           ...state,
           posts: newPosts
        }
    }
    return state;
}

export default rootReducer